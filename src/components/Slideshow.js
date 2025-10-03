import React, { useState, useEffect } from 'react';
import { slideContent, navigationMap } from '../data/slideContent';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useModule } from '../contexts/ModuleContext';
import Slide from './Slide';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';

const Slideshow = ({ moduleId }) => {
  const [currentCoords, setCurrentCoords] = useState('0,0');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { markSlideVisited } = useModule();
  
  // Mark slide as visited when coordinates change
  useEffect(() => {
    markSlideVisited(moduleId, currentCoords);
  }, [currentCoords, moduleId, markSlideVisited]);
  
  // Get current slide data with error handling
  const currentNavigation = navigationMap.get(currentCoords);
  
  // Helper function to get slide content by path
  const getSlideContent = (contentPath) => {
    const parts = contentPath.split('.');
    let content = slideContent;
    for (const part of parts) {
      if (!content[part]) {
        console.warn(`Content path not found: ${contentPath} at part: ${part}`);
        return { content: { title: 'Content Not Found', description: `Path: ${contentPath}` } };
      }
      content = content[part];
    }
    return content;
  };
  
  // Enhanced navigation function with support for direct navigation
  const navigate = (direction, targetCoords = null) => {
    if (!currentNavigation && !targetCoords) return;
    
    // Handle direct navigation (from progress bar clicks)
    if (direction === 'direct' && targetCoords) {
      if (navigationMap.has(targetCoords) && !isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentCoords(targetCoords);
          setIsTransitioning(false);
        }, 200);
      }
      return;
    }
    
    // Handle directional navigation
    const connections = currentNavigation.connections;
    const nextCoords = connections[direction];
    
    if (nextCoords && !isTransitioning) {
      if (navigationMap.has(nextCoords)) {
        setIsTransitioning(true);
        
        // For horizontal navigation (left/right), always go to top level (y=0)
        let finalCoords = nextCoords;
        if (direction === 'left' || direction === 'right') {
          const [x, y] = nextCoords.split(',');
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
        console.warn(`Target coordinates ${nextCoords} not found in navigationMap`);
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
      {/* Progress Bar Navigation */}
      <ProgressBar 
        currentCoords={currentCoords}
        navigate={navigate}
        navigationMap={navigationMap}
        isTransitioning={isTransitioning}
      />
      
      {/* Main Slide Content - adjusted for progress bar */}
      <div style={{ 
        flex: 1, 
        marginTop: '80px', // Space for progress bar
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Slide slide={currentSlide} isTransitioning={isTransitioning} />
      </div>
      
      {/* Bottom Navigation Controls */}
      <Navigation 
        currentNavigation={currentNavigation}
        navigate={navigate}
        isTransitioning={isTransitioning}
        navigationMap={navigationMap}
      />
      
      {/* Debug info - moved to avoid progress bar */}
      <div style={{
        position: 'fixed',
        top: '90px', // Below progress bar
        left: '20px',
        fontSize: '12px',
        opacity: 0.7,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '8px 12px',
        borderRadius: '4px'
      }}>
        <div>Module: {moduleId}</div>
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
