import classNames from 'classnames';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import { LocationType, OfferType, PlaceCardType } from '../../types';
import { useMap } from '../../hooks/use-map/use-map';

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

  const path = useLocation().pathname as AppRoute;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation, path);

  const markersLayerRef = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {
    if (map && offers) {
      if (!markersLayerRef.current) {
        markersLayerRef.current = leaflet.layerGroup().addTo(map);
      }

      const markerLayer = markersLayerRef.current;

      offers.forEach((offer) => {
        let existingMarker = markerLayer.getLayers().find(
          (layer) => (layer as Marker).getLatLng().lat === offer.location.latitude &&
            (layer as Marker).getLatLng().lng === offer.location.longitude
        ) as Marker;
        if (!existingMarker) {
          existingMarker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });
          existingMarker.addTo(markerLayer);
        }

        existingMarker
          .setIcon(offer.id === selectedPoint?.id ? currentCustomIcon : defaultCustomIcon);
      });

      if (currentOffer) {
        const currentOfferMarker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude,
        });

        currentOfferMarker
          .setIcon(currentCustomIcon)
          .addTo(markersLayerRef.current);
      }

      return () => {
        markerLayer.clearLayers();
      };
    }
  }, [map, offers, selectedPoint, currentOffer]);

  return (
    <section
      className={classNames(
        { 'offer__map': path.startsWith(AppRoute.Offer) },
        { 'cities__map': path === AppRoute.Main },
        'map',
      )}
      ref={mapRef}
      data-testid='map-element'
    />
  );
}

export default memo(Map);
