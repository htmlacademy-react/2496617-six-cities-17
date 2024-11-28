import { useLocation } from 'react-router-dom';

// ^======================== map ========================^ //

export default function Map(): JSX.Element {
  const path = useLocation().pathname;
  const mapClassDictionary: Record<string, string> = {
    '/': 'cities',
    '/offer': 'offer',
  };
  return (
    <section className={`${mapClassDictionary[path]}__map map`} />
  );
}
