import leaflet, { Map } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LocationType } from '../types';
// %======================== useMap ========================% //

export const useMap = (
  mapRef: MutableRefObject<HTMLDivElement | null>,
  cityLocation: LocationType
) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  const isOfferPage = useLocation().pathname.startsWith('/offer');

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        zoom: cityLocation.zoom,
        scrollWheelZoom: !isOfferPage,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);
      setMap(instance);

      isRenderedRef.current = true;
    }

    if (map) {
      map.setView(
        {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        cityLocation.zoom,
      );
    }
  }, [map, mapRef, cityLocation, isOfferPage]);

  return map;
};
