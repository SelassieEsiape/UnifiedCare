import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls the window to top whenever the route changes
// Why we need this: React Router doesn't do this automatically
// It keeps the scroll position from the previous page

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname (URL) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;