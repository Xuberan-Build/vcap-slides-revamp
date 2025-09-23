import { useEffect } from 'react';

export const useKeyboardNavigation = (navigate, isTransitioning) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isTransitioning) return;
      
      switch(event.key) {
        case 'ArrowLeft':
        case 'h':
          event.preventDefault();
          navigate('left');
          break;
        case 'ArrowRight':
        case 'l':
          event.preventDefault();
          navigate('right');
          break;
        case 'ArrowUp':
        case 'k':
          event.preventDefault();
          navigate('up');
          break;
        case 'ArrowDown':
        case 'j':
          event.preventDefault();
          navigate('down');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, isTransitioning]);
};
