import { renderHook } from '@testing-library/react';
import { Map } from 'leaflet';
import { createRef, MutableRefObject } from 'react';
import { describe } from 'vitest';
import { AppRoute } from '../const';
import { makeFakeLocation } from '../utils/mocks';
import { useMap } from './use-map';

describe('Hook: useMap', () => {
  it('Should initialize the map correctly', () => {
    const fakeLocation = makeFakeLocation();
    const path = AppRoute.Main;
    const mapRef = createRef() as MutableRefObject<HTMLDivElement>;
    mapRef.current = document.createElement('div');

    const { result } = renderHook(() => useMap(mapRef, fakeLocation, path));
    const map = result.current;

    expect(map).not.toBeNull();
    expect(map).toBeInstanceOf(Map);
  });


  it('Should set map center and zoom correctly', () => {
    const fakeLocation = makeFakeLocation();
    const path = AppRoute.Main;
    const mapRef = createRef() as MutableRefObject<HTMLDivElement>;
    mapRef.current = document.createElement('div');

    const { result } = renderHook(() => useMap(mapRef, fakeLocation, path));
    const map = result.current;

    expect(map).not.toBeNull();
    expect(map?.getCenter()).toEqual({
      lat: fakeLocation.latitude,
      lng: fakeLocation.longitude
    });
    expect(map?.getZoom()).toBe(fakeLocation.zoom);
  });

  it('Should initialize the map once', () => {
    const fakeLocation = makeFakeLocation();
    const path = AppRoute.Main;
    const mapRef = createRef() as MutableRefObject<HTMLDivElement>;
    mapRef.current = document.createElement('div');

    const { result, rerender } = renderHook(
      () => useMap(mapRef, fakeLocation, path),
      { initialProps: { mapRef, cityLocation: fakeLocation, path } }
    );

    const map = result.current;

    expect(map).not.toBeNull();
    expect(map).toBeInstanceOf(Map);

    rerender({ mapRef, cityLocation: fakeLocation, path });
    const newMap = result.current;
    expect(newMap).toBe(map);
  });

  it('Should update map view when city location changes', () => {
    const fakeLocation = makeFakeLocation();
    const mapRef = createRef() as MutableRefObject<HTMLDivElement>;
    mapRef.current = document.createElement('div');
    const path = AppRoute.Main;

    const { result, rerender } = renderHook(
      ({ cityLocation }) => useMap(mapRef, cityLocation, path),
      { initialProps: { mapRef, cityLocation: fakeLocation, path } }
    );

    const map = result.current;
    expect(map).not.toBeNull();

    const updatedLocation = { ...fakeLocation, latitude: 50, longitude: 50 };
    rerender({ mapRef, cityLocation: updatedLocation, path });

    expect(map?.getCenter()).toEqual({
      lat: updatedLocation.latitude,
      lng: updatedLocation.longitude,
    });
  });
});
