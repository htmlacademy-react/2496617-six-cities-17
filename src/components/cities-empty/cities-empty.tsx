import { useAppSelector } from '../../hooks';
import { getCityName } from '../../store/offers-process/offers-process.selectors';
import { capitalize } from '../../utils/utils';

// ^======================== CitiesEmpty ========================^ //

function CitiesEmpty(): JSX.Element {
  const selectedCity = useAppSelector(getCityName);
  return (
    <div className='cities'>
      <div className='cities__places-container cities__places-container--empty container'>
        <section className='cities__no-places'>
          <div className='cities__status-wrapper tabs__content'>
            <b className='cities__status'>No places to stay available</b>
            <p className='cities__status-description'>We could not find any property available at the moment in {capitalize(selectedCity)}</p>
          </div>
        </section>
        <div className='cities__right-section'></div>
      </div>
    </div>
  );
}
export default CitiesEmpty;
