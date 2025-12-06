import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prevPath = prevPathname.current;
    
    // Leaving home page → save scroll position
    if (prevPath === '/' && pathname !== '/') {
      sessionStorage.setItem('homeScrollY', window.scrollY.toString());
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    // Returning to home page → restore scroll position
    else if (pathname === '/' && prevPath !== '/') {
      const savedY = sessionStorage.getItem('homeScrollY');
      if (savedY) {
        // Wait for content to render before restoring scroll
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: parseInt(savedY, 10), left: 0, behavior: 'instant' });
          });
        });
      }
    }
    // Any other navigation → scroll to top
    else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
