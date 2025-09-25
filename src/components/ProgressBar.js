import React from 'react';

const ProgressBar = ({ currentCoords, navigate, navigationMap, isTransitioning }) => {
  // Define the main sections of the consciousness journey
  const sections = [
    { name: 'Title', xRange: [0, 0], color: '#667eea', icon: '✦' },
    { name: 'Introduction', xRange: [1, 1], color: '#f093fb', icon: '🌟' },
    { name: 'Approach', xRange: [2, 2], color: '#4facfe', icon: '🎯' },
    { name: 'Foundation', xRange: [3, 3], color: '#43e97b', icon: '🏛️' },
    { name: 'Presuppositions', xRange: [4, 13], color: '#ffa726', icon: '🧠' },
    { name: 'Money Mindset', xRange: [14, 14], color: '#66bb6a', icon: '💎' },
    { name: 'Self-Concept', xRange: [15, 15], color: '#ab47bc', icon: '🔮' },
    { name: 'Values', xRange: [16, 16], color: '#ff7043', icon: '💫' }
  ];

  const [currentX, currentY] = currentCoords.split(',').map(Number);

  // Calculate overall progress
  const totalSlides = Array.from(navigationMap.keys()).length;
  const currentSlideIndex = Array.from(navigationMap.keys()).indexOf(currentCoords);
  const overallProgress = ((currentSlideIndex + 1) / totalSlides) * 100;

  // Get current section info
  const currentSection = sections.find(section => 
    currentX >= section.xRange[0] && currentX <= section.xRange[1]
  );

  // Calculate section-specific progress
  const getSectionProgress = (section) => {
    const sectionSlides = Array.from(navigationMap.keys()).filter(coords => {
      const x = parseInt(coords.split(',')[0]);
      return x >= section.xRange[0] && x <= section.xRange[1];
    });
    
    if (currentSection === section) {
      const currentSectionSlideIndex = sectionSlides.indexOf(currentCoords);
      return ((currentSectionSlideIndex + 1) / sectionSlides.length) * 100;
    } else if (sections.indexOf(section) < sections.indexOf(currentSection)) {
      return 100; // Completed sections
    }
    return 0; // Future sections
  };

  // Navigate to section
  const navigateToSection = (section) => {
    if (isTransitioning) return;
    
    // Find the first slide in this section
    const firstSlideInSection = Array.from(navigationMap.keys()).find(coords => {
      const x = parseInt(coords.split(',')[0]);
      const y = parseInt(coords.split(',')[1]);
      return x >= section.xRange[0] && x <= section.xRange[1] && y === 0;
    });
    
    if (firstSlideInSection && navigationMap.has(firstSlideInSection)) {
      const [targetX, targetY] = firstSlideInSection.split(',').map(Number);
      navigate('direct', firstSlideInSection);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(40,40,40,0.95) 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px'
    }}>
      {/* Section Progress Indicators */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        gap: '8px',
        overflow: 'hidden'
      }}>
        {sections.map((section, index) => {
          const progress = getSectionProgress(section);
          const isActive = currentSection === section;
          const isCompleted = progress === 100 && !isActive;
          
          return (
            <div
              key={section.name}
              onClick={() => navigateToSection(section)}
              style={{
                flex: section.name === 'Presuppositions' ? '3' : '1',
                height: '32px',
                background: `linear-gradient(135deg, ${section.color}20, ${section.color}10)`,
                borderRadius: '16px',
                border: isActive ? `2px solid ${section.color}` : `1px solid ${section.color}40`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                minWidth: '100px',
                opacity: isTransitioning ? 0.7 : 1,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isActive ? `0 0 20px ${section.color}40` : 'none'
              }}
            >
              {/* Progress fill */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${section.color}60, ${section.color}40)`,
                borderRadius: '16px',
                transition: 'width 0.5s ease'
              }} />
              
              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: isActive ? '#ffffff' : '#cccccc',
                fontSize: '12px',
                fontWeight: isActive ? 'bold' : 'normal',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}>
                <span style={{ fontSize: '14px' }}>{section.icon}</span>
                <span style={{ 
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {section.name}
                </span>
                {isCompleted && (
                  <span style={{ 
                    color: '#4caf50',
                    fontSize: '10px',
                    marginLeft: '4px'
                  }}>✓</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Overall Progress Bar */}
      <div style={{
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <span style={{
          color: '#888',
          fontSize: '11px',
          minWidth: '80px'
        }}>
          Overall Progress
        </span>
        
        <div style={{
          flex: 1,
          height: '6px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${overallProgress}%`,
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            borderRadius: '3px',
            transition: 'width 0.5s ease',
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
          }} />
        </div>
        
        <span style={{
          color: '#ccc',
          fontSize: '11px',
          minWidth: '60px',
          textAlign: 'right'
        }}>
          {Math.round(overallProgress)}% Complete
        </span>
      </div>

      {/* Current Position Indicator */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        color: '#888',
        fontSize: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>{currentSection?.name || 'Unknown'}</span>
        <span style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '2px 6px', 
          borderRadius: '4px',
          color: '#ccc'
        }}>
          {currentCoords}
        </span>
        {currentY > 0 && (
          <span style={{ color: currentSection?.color }}>
            Level {currentY + 1}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;