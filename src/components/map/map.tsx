import { useLocation } from 'react-router-dom';
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardType, LocationType } from '../../types';
import { useMap } from '../../hooks/use-map';

// ^======================== map ========================^ //
type MapProps = {
  defaultLocation: LocationType;
  offers?: PlaceCardType[];
  selectedPoint?: PlaceCardType | undefined;
};

export default function Map({ defaultLocation, offers, selectedPoint }: MapProps): JSX.Element {

  const path = useLocation().pathname;
  const mapClassDictionary: Record<string, string> = {
    [AppRoute.Main]: 'cities',
    [AppRoute.Offer]: 'offer',
  };


  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultLocation);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {

    if (map && offers) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: offer.id === selectedPoint?.id
                ? currentCustomIcon
                : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint, defaultCustomIcon, currentCustomIcon]);

  return (
    <section
      className={`${mapClassDictionary[path]}__map map`}
      ref={mapRef}
    />

  );
}
