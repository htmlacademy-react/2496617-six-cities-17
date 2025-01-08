import { useLocation } from 'react-router-dom';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { memo, useEffect, useRef } from 'react';
import leaflet, { layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardType, LocationType, OfferType } from '../../types';
import { useMap } from '../../hooks/use-map';
import classNames from 'classnames';

// ^======================== map ========================^ //
type MapProps = {
  cityLocation: LocationType;
  offers?: PlaceCardType[];
  selectedPoint?: PlaceCardType;
  currentOffer?: OfferType;
};

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

function Map({ cityLocation, offers, selectedPoint, currentOffer }: MapProps): JSX.Element {

  const path = useLocation().pathname;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map && offers) {
      const markerLayer = layerGroup().addTo(map);

      [...offers].forEach((offer) => {
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

      if (currentOffer) {
        const currenOfferMarker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude,
        });

        currenOfferMarker
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }
    }
  }, [map, offers, selectedPoint, cityLocation, currentOffer]);

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

export default memo(Map);
