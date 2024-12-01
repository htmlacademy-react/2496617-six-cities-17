import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

// ^======================== map ========================^ //

export default function Map(): JSX.Element {
  const path = useLocation().pathname;
  const mapClassDictionary: Record<string, string> = {
    [AppRoute.Main]: 'cities',
    [AppRoute.Offer]: 'offer',
  };
  return (
    <section className={`${mapClassDictionary[path]}__map map`} />
  );
}
