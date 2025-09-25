import React, { useState } from 'react';
import { slideContent, navigationMap } from '../data/slideContent';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import Slide from './Slide';
import Navigation from './Navigation';

const Slideshow = () => {
  const [currentCoords, setCurrentCoords] = useState('0,0');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get current slide data with error handling
  const currentNavigation = navigationMap.get(currentCoords);
  
  // Helper function to get slide content by path
  const getSlideContent = (contentPath) => {
    console.log('Looking for path:', contentPath);
    console.log('Available slideContent keys:', Object.keys(slideContent));
    
    const parts = contentPath.split('.');
    let content = slideContent;
    for (const part of parts) {
      console.log('Looking for part:', part, 'in:', Object.keys(content || {}));
      if (!content[part]) {
        console.warn(`Content path not found: ${contentPath} at part: ${part}`);
        return { content: { title: 'Content Not Found', description: `Path: ${contentPath}` } };
      }
      content = content[part];
    }
    console.log('Found content:', content);
    return content;
  };
  
  // Enhanced navigation function with top-level reset for horizontal movement
  const navigate = (direction) => {
    if (!currentNavigation) return;
    
    const connections = currentNavigation.connections;
    const targetCoords = connections[direction];
    
    if (targetCoords && !isTransitioning) {
      if (navigationMap.has(targetCoords)) {
        setIsTransitioning(true);
        
        // For horizontal navigation (left/right), always go to top level (y=0)
        let finalCoords = targetCoords;
        if (direction === 'left' || direction === 'right') {
          const [x, y] = targetCoords.split(',');
          const topLevelCoords = `${x},0`;
          if (navigationMap.has(topLevelCoords)) {
            finalCoords = topLevelCoords;
          }
        }
        
        setTimeout(() => {
          setCurrentCoords(finalCoords);
          setIsTransitioning(false);
        }, 150);
      } else {
        console.warn(`Target coordinates ${targetCoords} not found in navigationMap`);
      }
    }
  };

  // Use keyboard navigation hook
  useKeyboardNavigation(navigate, isTransitioning);

  // Safety check for invalid coordinates
  if (!currentNavigation) {
    console.warn(`Invalid coordinates: ${currentCoords}, resetting to 0,0`);
    setTimeout(() => setCurrentCoords('0,0'), 0);
    return (
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#1a1a1a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>Loading...</div>
      </div>
    );
  }
  
  const currentSlide = getSlideContent(currentNavigation.content);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#1a1a1a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <Slide slide={currentSlide} isTransitioning={isTransitioning} />
      
      <Navigation 
        currentNavigation={currentNavigation}
        navigate={navigate}
        isTransitioning={isTransitioning}
        navigationMap={navigationMap}
      />
      
      {/* Debug info */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        fontSize: '12px',
        opacity: 0.7,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '8px 12px',
        borderRadius: '4px'
      }}>
        <div>Position: {currentCoords}</div>
        <div>Slide: {currentNavigation.content}</div>
        <div>Available: {Object.keys(currentNavigation.connections).filter(dir => 
          navigationMap.has(currentNavigation.connections[dir])
        ).join(', ')}</div>
      </div>
    </div>
  );
};

export default Slideshow;
