import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { APIRoute, AuthorizationStatus, NameSpace } from '../../const';
import { fetchOffersAction, logoutAction } from '../../store/api-action';
import { withHistory, withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import HeaderNav from './header-nav';

describe('Component: HeaderNav', () => {
  it('Should render correctly', () => {
    const headerNavTestId = 'header-nav-element';
    const { withStoreComponent } = withStore(<HeaderNav />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(headerNavTestId)).toBeInTheDocument();
  });

  it('Should dispatch "logoutAction" when user is authorized and clicks on header nav link', async () => {
    const headerNavLinkTestId = 'header-nav-link-element';
    const fakeStoreWithAuthStatus = makeFakeStore({
      [NameSpace.Auth]: {
        ...makeFakeStore()[NameSpace.Auth],
        status: AuthorizationStatus.Auth,
      },
    });

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<HeaderNav />, fakeStoreWithAuthStatus);
    const withHistoryComponent = withHistory(withStoreComponent);

    mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204, [makeFakePlaceCard()]);
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, []);

    render(withHistoryComponent);

    await userEvent.click(screen.getByTestId(headerNavLinkTestId));

    const actionsTypes = extractActionsTypes(mockStore.getActions());

    expect(actionsTypes).toEqual([
      logoutAction.pending.type,
      fetchOffersAction.pending.type,
      logoutAction.fulfilled.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });
});
