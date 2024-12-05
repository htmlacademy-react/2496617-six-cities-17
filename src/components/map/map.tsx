import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardType } from '../../types/place-card-type';

// ^======================== map ========================^ //
type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};
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

  const points = offers?.map((offer) => offer.location);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = leaflet.map(mapRef.current, {
      center: [defaultLocation.latitude, defaultLocation.longitude],
      zoom: defaultLocation.zoom
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      )
      .addTo(map);

    points?.forEach((point) => {
      leaflet.marker([point.latitude, point.longitude]).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [offers, points, defaultLocation]);

  return (
    <section
      className={`${mapClassDictionary[path]}__map map`}
      ref={mapRef}
    />

  );
}
