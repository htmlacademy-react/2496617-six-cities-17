import { useLocation } from 'react-router-dom';
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardType } from '../../types/place-card-type';
import { useMap } from '../../hooks/use-map';
import { LocationType } from '../../types/location-type';

// ^======================== map ========================^ //
type MapProps = {
  defaultLocation: LocationType;
  offers?: PlaceCardType[];
};

export default function Map({ defaultLocation, offers }: MapProps): JSX.Element {

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
      const points = offers.map((offer) => offer.location);

      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <section
      className={`${mapClassDictionary[path]}__map map`}
      ref={mapRef}
    />

  );
}
