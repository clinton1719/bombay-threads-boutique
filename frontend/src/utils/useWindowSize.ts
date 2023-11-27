import { useState, useEffect } from 'react';

const useWindowSize = (): { width: number; height: number } => {
  const [windowsSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listenToChange = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('ChangeSize', listenToChange);

      listenToChange();

      return () => window.removeEventListener('resize', listenToChange);
    }
  }, []);

  return windowsSize;
};

export default useWindowSize;
