import { useLocation } from 'react-router-dom';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import leaflet, { layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardType, LocationType } from '../../types';
import { useMap } from '../../hooks/use-map';
import classNames from 'classnames';

// ^======================== map ========================^ //
type MapProps = {
  defaultLocation: LocationType;
  offers?: PlaceCardType[];
  selectedPoint?: PlaceCardType;
};

export default function Map({ defaultLocation, offers, selectedPoint }: MapProps): JSX.Element {

  const path = useLocation().pathname;

  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultLocation);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [28, 40],
    iconAnchor: [16, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [28, 40],
    iconAnchor: [16, 40],
  });

  useEffect(() => {

    if (map && offers) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(offer.id === selectedPoint?.id
            ? currentCustomIcon
            : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });
    }
  }, [map, offers, selectedPoint, defaultCustomIcon, currentCustomIcon]);

  return (
    <section
      className={classNames(
        { 'offer__map': path.startsWith('/offer') },
        { 'cities__map': path === '/' },
        'map',
      )}
      ref={mapRef}
    />
  );
}
