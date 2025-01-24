import './preloader.css';

// ^======================== Preloader ========================^ //

export default function Preloader(): JSX.Element {
  return (
    <div className='preloader__wrapper'>
      <div className='preloader' >
        Loading...
      </div>
    </div>
  );
}
