import classNames from 'classnames';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useMap } from '../../hooks/use-map';
import { LocationType, OfferType, PlaceCardType } from '../../types';

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

  const markerLayerRef = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {
    if (map && offers) {
      if (!markerLayerRef.current) {
        markerLayerRef.current = leaflet.layerGroup().addTo(map);
      } else {
        markerLayerRef.current.clearLayers();
      }

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(offer.id === selectedPoint?.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayerRef.current!);
      });

      if (currentOffer) {
        const currentOfferMarker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude,
        });

        currentOfferMarker
          .setIcon(currentCustomIcon)
          .addTo(markerLayerRef.current);
      }
    }
  }, [map, offers, selectedPoint, currentOffer]);

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
