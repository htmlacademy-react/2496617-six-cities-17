import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// ^======================== NotFoundPage ========================^ //

export default function NotFoundPage(): JSX.Element {
  return (
    <div className='page'>
      <Helmet>
        <title>6 cities - not-found :(</title>
      </Helmet>
      <main
        className='page__main page__main--not-found'
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100dvh'
        }}
      >
        <p>Error 404</p>
        <h1>Page not found :(</h1>
        <Link to='/'
          style={{
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Go to main page
        </Link>
      </main>
    </div>
  );
}
