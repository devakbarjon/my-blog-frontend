// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;
      if (target.matches('.navbar .nav-link')) {
        const hash = target.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          event.preventDefault();
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
            window.history.pushState(null, null, hash);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;