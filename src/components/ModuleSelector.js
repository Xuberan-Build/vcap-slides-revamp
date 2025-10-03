import React from 'react';
import { useModule } from '../contexts/ModuleContext';
import { getModuleList } from '../data/moduleConfig';

const ModuleSelector = () => {
  const { switchModule, getModuleCompletion, currentModule } = useModule();
  const moduleList = getModuleList();

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #9333EA 0%, #0EA5E9 50%, #10B981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          letterSpacing: '-0.02em'
        }}>
          Visionary Creator's Activation Protocol
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#9CA3AF',
          lineHeight: '1.6'
        }}>
          Choose a module to begin your consciousness transformation journey
        </p>
      </div>

      {/* Module Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {moduleList.map((module) => {
          const completion = getModuleCompletion(module.id);
          const isAvailable = module.totalSlides > 0;
          const isActive = currentModule === module.id;

          return (
            <div
              key={module.id}
              onClick={() => isAvailable && switchModule(module.id)}
              style={{
                backgroundColor: '#1a1a1a',
                border: `2px solid ${isActive ? module.color : '#333'}`,
                borderRadius: '16px',
                padding: '32px',
                cursor: isAvailable ? 'pointer' : 'not-allowed',
                opacity: isAvailable ? 1 : 0.5,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isActive ? `0 10px 40px ${module.color}40` : 'none'
              }}
              onMouseEnter={(e) => {
                if (isAvailable) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = module.color;
                  e.currentTarget.style.boxShadow = `0 10px 40px ${module.color}40`;
                }
              }}
              onMouseLeave={(e) => {
                if (isAvailable && !isActive) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = '#333';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                {module.icon}
              </div>

              {/* Module Title */}
              <div style={{
                fontSize: '0.875rem',
                color: module.color,
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                textTransform: 'uppercase'
              }}>
                {module.title}
              </div>

              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '12px',
                lineHeight: '1.2'
              }}>
                {module.fullTitle}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#9CA3AF',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                {module.description}
              </p>

              {/* Sections List */}
              <div style={{
                marginBottom: '20px'
              }}>
                {module.sections.slice(0, 3).map((section, idx) => (
                  <div key={idx} style={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    marginBottom: '6px',
                    paddingLeft: '12px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: module.color
                    }}>•</span>
                    {section}
                  </div>
                ))}
                {module.sections.length > 3 && (
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    paddingLeft: '12px'
                  }}>
                    +{module.sections.length - 3} more sections
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {isAvailable && (
                <div style={{
                  marginTop: 'auto'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#9CA3AF'
                    }}>
                      Progress
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: module.color
                    }}>
                      {completion}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: '#333',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${completion}%`,
                      height: '100%',
                      backgroundColor: module.color,
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              )}

              {/* Coming Soon Badge */}
              {!isAvailable && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: '#333',
                  color: '#9CA3AF',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Coming Soon
                </div>
              )}

              {/* Active Badge */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: module.color,
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Active
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        color: '#6B7280',
        fontSize: '0.875rem',
        maxWidth: '600px'
      }}>
        <p>
          Your progress is automatically saved. You can switch between modules at any time
          using the module selector button in the top navigation.
        </p>
      </div>
    </div>
  );
};

export default ModuleSelector;
