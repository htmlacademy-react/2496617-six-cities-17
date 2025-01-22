import { render, screen } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { describe } from 'vitest';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import App from './app';

describe('Component: App', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('Should render "MainPage" when user navigates to "/"', () => {
    const mainPageTestId = 'main-page-element';
    const { withStoreComponent } = withStore(<App />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    mockHistory.push(AppRoute.Main);

    render(withHistoryComponent);

    expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument();
  });

  it('Should render "OfferPage" when user navigates to "/offer"', () => {
    const fakeStore = makeFakeStore();
    const offerPageTestId = 'offer-page-element';
    const { withStoreComponent } = withStore(<App />, fakeStore);
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    const fakeOfferId = fakeStore[NameSpace.Offer].data?.id;
    mockHistory.push(`/offer/${fakeOfferId}`);

    render(withHistoryComponent);

    expect(screen.getByTestId(offerPageTestId)).toBeInTheDocument();
  });

  it('Should render "FavoritesPage" when user navigates to "/favorites" and is authorized', () => {
    const fakeStoreWithAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.Auth,
      },
    });
    const favoritesPageTestId = 'favorites-page-element';
    const { withStoreComponent } = withStore(<App />, fakeStoreWithAuthorizedStatus);
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    mockHistory.push(AppRoute.Favorites);

    render(withHistoryComponent);

    expect(screen.getByTestId(favoritesPageTestId)).toBeInTheDocument();
  });

  it('Should render "LoginPage" when user navigates to "/favorites" and is not authorized', () => {
    const fakeStoreWithAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.NoAuth,
      },
    });
    const loginPageTestId = 'login-page-element';
    const { withStoreComponent } = withStore(<App />, fakeStoreWithAuthorizedStatus);
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    mockHistory.push(AppRoute.Favorites);

    render(withHistoryComponent);

    expect(screen.getByTestId(loginPageTestId)).toBeInTheDocument();
  });

  it('Should render "LoginPage" when user navigates to "/login" and is not authorized', () => {
    const fakeStoreWithAuthorizedStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.NoAuth,
      },
    });
    const loginPageTestId = 'login-page-element';
    const { withStoreComponent } = withStore(<App />, fakeStoreWithAuthorizedStatus);
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    mockHistory.push(AppRoute.Login);

    render(withHistoryComponent);

    expect(screen.getByTestId(loginPageTestId)).toBeInTheDocument();
  });

  it('Should render "NotFoundPage" when user navigates to route that does not exist', () => {
    const fakeStore = makeFakeStore();
    const notFoundPageTestId = 'not-found-page-element';
    const { withStoreComponent } = withStore(<App />, fakeStore);
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);
    mockHistory.push('/route that does not exist');

    render(withHistoryComponent);

    expect(screen.getByTestId(notFoundPageTestId)).toBeInTheDocument();
  });
});
