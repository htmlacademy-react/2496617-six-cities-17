import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { browserHistory } from '../../browser-history/browser-history';
import { APIRoute, AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { store } from '../../store';
import { redirectToRoute } from '../../store/action';
import { addToFavoritesAction, removeFromFavoritesAction } from '../../store/api-action';
import { withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import BookmarkButton from './bookmark-button';

describe('Component: BookmarkButton', () => {
  it('Should render correctly', () => {
    const mockBookmarkButtonProps = {
      elementClass: faker.string.alpha(10),
      isFavorite: faker.datatype.boolean(),
      sizes: {
        width: faker.number.int(),
        height: faker.number.int(),
      },
      offerId: faker.string.nanoid()
    };
    const bookmarkButtonTestId = 'bookmark-button-element';

    const { withStoreComponent } = withStore(<BookmarkButton {...mockBookmarkButtonProps} />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(bookmarkButtonTestId)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should dispatch "addToFavoritesAction" for not favorite offer when user click bookmark button if user is authorized', async () => {
    const fakePlaceCardFavorite = { ...makeFakePlaceCard(), isFavorite: true };

    const mockBookmarkButtonProps = {
      elementClass: faker.string.alpha(10),
      isFavorite: false,
      sizes: {
        width: faker.number.int(),
        height: faker.number.int(),
      },
      offerId: fakePlaceCardFavorite.id
    };

    const fakeStoreWithAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.Auth,
      },
    });

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      <BookmarkButton {...mockBookmarkButtonProps} />,
      fakeStoreWithAuthorizedStatus
    );

    mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${fakePlaceCardFavorite.id}/1`).reply(200, fakePlaceCardFavorite);

    render(withStoreComponent);

    await userEvent.click(screen.getByRole('button'));

    const actionsTypes = extractActionsTypes(mockStore.getActions());

    expect(actionsTypes).toEqual([
      addToFavoritesAction.pending.type,
      addToFavoritesAction.fulfilled.type,
    ]);
  });

  it('Should dispatch "removeFromFavoritesAction" for favorite offer when user click bookmark button if user is authorized', async () => {
    const fakePlaceCardNotFavorite = { ...makeFakePlaceCard(), isFavorite: false };

    const mockBookmarkButtonProps = {
      elementClass: faker.string.alpha(10),
      isFavorite: true,
      sizes: {
        width: faker.number.int(),
        height: faker.number.int(),
      },
      offerId: fakePlaceCardNotFavorite.id
    };

    const fakeStoreWithAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.Auth,
      },
    });

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      <BookmarkButton {...mockBookmarkButtonProps} />,
      fakeStoreWithAuthorizedStatus
    );

    mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${fakePlaceCardNotFavorite.id}/0`).reply(200, fakePlaceCardNotFavorite);

    render(withStoreComponent);

    await userEvent.click(screen.getByRole('button'));

    const actionsTypes = extractActionsTypes(mockStore.getActions());

    expect(actionsTypes).toEqual([
      removeFromFavoritesAction.pending.type,
      removeFromFavoritesAction.fulfilled.type,
    ]);
  });

  it('Should dispatch "redirectToRoute" when user click bookmark button if user is not authorized', async () => {
    const fakePlaceCardNotFavorite = { ...makeFakePlaceCard(), isFavorite: false };

    const mockBookmarkButtonProps = {
      elementClass: faker.string.alpha(10),
      isFavorite: faker.datatype.boolean(),
      sizes: {
        width: faker.number.int(),
        height: faker.number.int(),
      },
      offerId: fakePlaceCardNotFavorite.id
    };

    const fakeStoreWithNoAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.NoAuth,
      },
    });


    const { withStoreComponent } = withStore(
      <BookmarkButton {...mockBookmarkButtonProps} />,
      fakeStoreWithNoAuthorizedStatus
    );

    render(withStoreComponent);

    await userEvent.click(screen.getByRole('button'));

    const redirectAction = redirectToRoute(AppRoute.Login);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.Login);
  });
});

