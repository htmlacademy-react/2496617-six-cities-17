import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import FavoritesPage from './favorites-page';

describe('Page: FavoritesPage', () => {
  it('Should render correctly if there are favorite offers', () => {
    const expectedHeadingText = 'Saved listing';
    const mockFavoriteOffersAmount = getRandomInteger(0, 120);
    const favoritesListTestId = 'favorites-list-element';
    const fakeStoreWithOffers = makeFakeStore({
      [NameSpace.FavoriteOffers]: {
        data: Array.from({ length: mockFavoriteOffersAmount }, makeFakePlaceCard),
        status: DataStatus.Unknown,
      }
    });

    const { withStoreComponent } = withStore(<FavoritesPage />, fakeStoreWithOffers);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(expectedHeadingText)).toBeInTheDocument();
    expect(screen.getByTestId(favoritesListTestId)).toBeInTheDocument();
  });

  it('Should render correctly if there are no favorite offers', () => {
    const expectedHeadingText = 'Nothing yet saved.';
    const expectedText = 'Save properties to narrow down search or plan your future trips.';
    const fakeStoreWithNoOffers = makeFakeStore({
      [NameSpace.FavoriteOffers]: {
        data: [],
        status: DataStatus.Unknown,
      }
    });

    const { withStoreComponent } = withStore(<FavoritesPage />, fakeStoreWithNoOffers);
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(expectedHeadingText)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
