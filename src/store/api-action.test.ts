import { faker } from '@faker-js/faker';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { beforeEach, describe, it } from 'vitest';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import * as tokenStorage from '../services/token';
import { AppState, AuthData } from '../types';
import { AppThunkDispatch, extractActionsTypes, makeFakeOffer, makeFakePlaceCard, makeFakeReview, makeFakeReviewData } from '../utils/mocks';
import { getRandomInteger } from '../utils/utils';
import { addToFavoritesAction, checkAuthAction, fetchFavoriteOffersAction, fetchNearPlacesAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, loginAction, logoutAction, postReviewAction, removeFromFavoritesAction } from './api-action';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<AppState, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ OFFERS: { all: [] } });
  });

  describe('fetchOffersAction', () => {
    it('Should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled" when server response 200', async () => {
      const mockOffers = Array.from({ length: getRandomInteger(10, 120) }, makeFakeOffer);
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);
      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('Should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);
      await store.dispatch(fetchOffersAction());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('Should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled" when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockOfferId = mockOffer.id;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferId}`).reply(200, mockOffer);

      await store.dispatch(fetchOfferAction(mockOfferId));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(actionTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });

    it('Should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();
      const mockOfferId = mockOffer.id;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferId}`).reply(400);
      await store.dispatch(fetchOfferAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearPlacesAction', () => {
    it('Should dispatch "fetchNearPlacesAction.pending", "fetchNearPlacesAction.fulfilled" when server response 200', async () => {
      const mockNearPlaces = Array.from({ length: getRandomInteger(10, 120) }, makeFakePlaceCard);
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.NearPlaces.replace(':offerId', mockOfferId)).reply(200, mockNearPlaces);
      await store.dispatch(fetchNearPlacesAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      const fetchNearPlacesActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearPlacesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearPlacesAction.pending.type,
        fetchNearPlacesAction.fulfilled.type,
      ]);

      expect(fetchNearPlacesActionFulfilled.payload).toEqual(mockNearPlaces);
    });

    it('Should dispatch "fetchNearPlacesAction.pending", "fetchNearPlacesAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.NearPlaces.replace(':offerId', mockOfferId)).reply(400);
      await store.dispatch(fetchNearPlacesAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchNearPlacesAction.pending.type,
        fetchNearPlacesAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('Should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.fulfilled" when server response 200', async () => {
      const mockReviews = Array.from({ length: getRandomInteger(10, 120) }, makeFakeReview);
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.Reviews.replace(':offerId', mockOfferId)).reply(200, mockReviews);
      await store.dispatch(fetchReviewsAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload).toEqual(mockReviews);
    });

    it('Should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.Reviews.replace(':offerId', mockOfferId)).reply(400);
      await store.dispatch(fetchReviewsAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('postReviewAction', () => {
    it('Should dispatch "postReviewAction.pending", "postReviewAction.fulfilled" when server response 200', async () => {
      const mockReview = makeFakeReviewData();

      mockAxiosAdapter.onPost(APIRoute.Reviews.replace(':offerId', mockReview.offerId), {
        rating: mockReview.rating,
        comment: mockReview.comment,
      }).reply(200);

      await store.dispatch(postReviewAction(mockReview));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);


      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type,
      ]);
    });

    it('Should dispatch "postReviewAction.pending", "postReviewAction.rejected" when server response 400', async () => {
      const mockReview = makeFakeReviewData();

      mockAxiosAdapter.onPost(APIRoute.Reviews.replace(':offerId', mockReview.offerId), {
        rating: mockReview.rating,
        comment: mockReview.comment,
      }).reply(400);

      await store.dispatch(postReviewAction(mockReview));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersAction', () => {
    it('Should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.fulfilled" when server response 200', async () => {
      const mockFavoriteOffers = Array.from({ length: getRandomInteger(5, 10) }, makeFakePlaceCard);
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);

      await store.dispatch(fetchFavoriteOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      const fetchFavoriteOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersActionFulfilled.payload).toEqual(mockFavoriteOffers);
    });

    it('Should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);
      await store.dispatch(fetchFavoriteOffersAction());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('addToFavoritesAction', () => {
    it('Should dispatch "addToFavoritesAction.pending", "addToFavoritesAction.fulfilled" when server response 200', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/1`).reply(200);

      await store.dispatch(addToFavoritesAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        addToFavoritesAction.pending.type,
        addToFavoritesAction.fulfilled.type,
      ]);
    });

    it('Should dispatch "addToFavoritesAction.pending", "addToFavoritesAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/1`).reply(400);

      await store.dispatch(addToFavoritesAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        addToFavoritesAction.pending.type,
        addToFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('removeFromFavoritesAction', () => {
    it('Should dispatch "removeFromFavoritesAction.pending", "removeFromFavoritesAction.fulfilled" when server response 200', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/0`).reply(200);

      await store.dispatch(removeFromFavoritesAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        removeFromFavoritesAction.pending.type,
        removeFromFavoritesAction.fulfilled.type,
      ]);
    });

    it('Should dispatch "removeFromFavoritesAction.pending", "removeFromFavoritesAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/0`).reply(400);

      await store.dispatch(removeFromFavoritesAction(mockOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        removeFromFavoritesAction.pending.type,
        removeFromFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('checkAuthAction', () => {
    it('Should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction when server response 200', async () => {
      const mockAuthResponse = {
        email: faker.internet.email,
        avatarUrl: faker.system.filePath,
      };

      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockAuthResponse);

      await store.dispatch(checkAuthAction());
      const actionTypes = extractActionsTypes(store.getActions());

      expect(actionTypes).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('Should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" with thunk "checkAuthAction when server response 401',
      async () => {
        mockAxiosAdapter.onGet(APIRoute.Login).reply(401);

        await store.dispatch(checkAuthAction());
        const actionTypes = extractActionsTypes(store.getActions());

        expect(actionTypes).toEqual([
          checkAuthAction.pending.type,
          checkAuthAction.rejected.type,
        ]);
      });
  });

  describe('loginAction', () => {
    it('Should dispatch "loginAction.pending", "fetchOffersAction.pending", "fetchFavoriteOffersAction.pending", "loginAction.fulfilled" when server response 200 ', async () => {
      const fakeUser: AuthData = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      const fakeServerReply = { token: faker.string.alpha(10) };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReply);

      await store.dispatch(loginAction(fakeUser));

      const emittedActions = store.getActions();
      const actionsTypes = extractActionsTypes(emittedActions);

      const loginActionFulfilled = emittedActions.at(3) as ReturnType<typeof loginAction.fulfilled>;

      expect(actionsTypes).toEqual([
        loginAction.pending.type,
        fetchOffersAction.pending.type,
        fetchFavoriteOffersAction.pending.type,
        loginAction.fulfilled.type
      ]);
      expect(loginActionFulfilled.payload).toEqual(fakeUser.email);
    });

    it('Should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      const fakeServerReply = { token: faker.string.alpha(10) };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReply);

      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReply.token);
    });
  });

  describe('logoutAction', () => {
    it('Should dispatch "logoutAction.pending", "fetchOffersAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actionsTypes = extractActionsTypes(store.getActions());

      expect(actionsTypes).toEqual([
        logoutAction.pending.type,
        fetchOffersAction.pending.type,
        logoutAction.fulfilled.type
      ]);
    });

    it('Should call "dropToken" once with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
