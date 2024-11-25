import FavoritesPage from '../../pages/favorites-page/favorites-page';
import MainPage from '../../pages/main-page/main-page';

// ^======================== App ========================^ //

export default function App(): JSX.Element {
  return (
    <div className='app'>
      <MainPage />
      <FavoritesPage/>
    </div>
  );
}
