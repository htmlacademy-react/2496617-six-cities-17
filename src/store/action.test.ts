import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { describe, it } from 'vitest';
import { AppRoute } from '../const';
import { AppState } from '../types';
import { extractActionsTypes } from '../utils/mocks';
import { redirectToRoute } from './action';

describe('actions', () => {
  const mockStoreCreator = configureMockStore<AppState, Action<string>>();
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ OFFERS: { all: [] } });
  });

  it('Should dispatch "redirectToRoute" with "redirectToRoute" action', () => {
    const mockRoute = '/mock-route' as AppRoute;
    store.dispatch(redirectToRoute(mockRoute));

    const actionsTypes = extractActionsTypes(store.getActions());

    expect(actionsTypes).toEqual([
      redirectToRoute.type,
    ]);
  });
});
