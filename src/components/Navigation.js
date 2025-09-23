import React from 'react';

const Navigation = ({ currentNavigation, navigate, isTransitioning, navigationMap }) => {
  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <>
      {/* Navigation Controls */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '8px',
        width: '120px',
        height: '120px'
      }}>
        {/* Up */}
        {currentNavigation.connections.up && navigationMap.has(currentNavigation.connections.up) && (
          <button 
            onClick={() => navigate('up')} 
            style={{
              ...buttonStyle,
              gridColumn: '2',
              gridRow: '1',
              opacity: isTransitioning ? 0.5 : 1
            }}
            disabled={isTransitioning}
          >
            ↑
          </button>
        )}
        
        {/* Left */}
        {currentNavigation.connections.left && navigationMap.has(currentNavigation.connections.left) && (
          <button 
            onClick={() => navigate('left')} 
            style={{
              ...buttonStyle,
              gridColumn: '1',
              gridRow: '2',
              opacity: isTransitioning ? 0.5 : 1
            }}
            disabled={isTransitioning}
          >
            ←
          </button>
        )}
        
        {/* Right */}
        {currentNavigation.connections.right && navigationMap.has(currentNavigation.connections.right) && (
          <button 
            onClick={() => navigate('right')} 
            style={{
              ...buttonStyle,
              gridColumn: '3',
              gridRow: '2',
              opacity: isTransitioning ? 0.5 : 1
            }}
            disabled={isTransitioning}
          >
            →
          </button>
        )}
        
        {/* Down */}
        {currentNavigation.connections.down && navigationMap.has(currentNavigation.connections.down) && (
          <button 
            onClick={() => navigate('down')} 
            style={{
              ...buttonStyle,
              gridColumn: '2',
              gridRow: '3',
              opacity: isTransitioning ? 0.5 : 1
            }}
            disabled={isTransitioning}
          >
            ↓
          </button>
        )}
      </div>
      
      {/* Navigation instructions */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        fontSize: '14px',
        color: '#888',
        lineHeight: 1.4
      }}>
        <div>Use arrow keys or click buttons to navigate</div>
        <div>h/j/k/l keys also work (vim-style)</div>
      </div>
    </>
  );
};

export default Navigation;
