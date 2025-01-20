import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import BookmarkButton from './bookmark-button';

describe('Component: BookmarkButton', () => {
  it('Should render correctly', () => {
    const bookmarkButtonTestId = 'bookmark-button-element';
    const mockBookmarkButtonProps = {
      elementClass: faker.string.alpha(),
      isFavorite: faker.datatype.boolean(),
      sizes: {
        width: faker.number.int(),
        height: faker.number.int(),
      },
      offerId: faker.string.alpha()
    };

    const { withStoreComponent } = withStore(<BookmarkButton {...mockBookmarkButtonProps} />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(bookmarkButtonTestId)).toBeInTheDocument();
  });
});
