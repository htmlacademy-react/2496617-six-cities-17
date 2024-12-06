import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// %======================== hooks ========================% //

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

};

export { useScrollToTop };