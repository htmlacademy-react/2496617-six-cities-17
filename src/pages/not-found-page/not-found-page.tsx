import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './not-found-page.css';

// ^======================== NotFoundPage ========================^ //

export default function NotFoundPage(): JSX.Element {
  return (
    <div className='page'>
      <Helmet>
        <title>6 cities - not-found :(</title>
      </Helmet>
      <main
        className='page__main page__main--not-found'
        data-testid='not-found-page-element'
      >
        <p>Error 404</p>
        <h1>Page not found :(</h1>
        <Link to='/'>
          Go to main page
        </Link>
      </main>
    </div>
  );
}
