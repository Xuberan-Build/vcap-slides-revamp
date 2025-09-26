import React from 'react';
import EnhancedSlide from './EnhancedSlide';

const Slide = ({ slide, isTransitioning }) => {
  // Check if this slide needs special visualization
  if (slide.content.visualization) {
    return <EnhancedSlide slide={slide} isTransitioning={isTransitioning} />;
  }

  // Default slide rendering for all other slides
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      transition: 'opacity 0.15s ease-in-out',
      opacity: isTransitioning ? 0.3 : 1
    }}>
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px',
        transform: `scale(${isTransitioning ? 0.98 : 1})`,
        transition: 'transform 0.15s ease-out'
      }}>
        {slide.content.mainTitle && (
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.2 }}>
            {slide.content.mainTitle}
            {slide.content.subtitle && (
              <span style={{ 
                display: 'block', 
                color: '#667eea',
                fontSize: '2rem',
                marginTop: '10px'
              }}>
                {slide.content.subtitle}
              </span>
            )}
          </h1>
        )}
        
        {slide.content.title && (
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: 1.2 }}>
            {slide.content.title}
          </h1>
        )}
        
        {slide.content.description && (
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '30px',
            lineHeight: 1.5,
            color: '#e0e0e0'
          }}>
            {slide.content.description}
          </p>
        )}
        
        {slide.content.statement && (
          <p style={{ 
            fontSize: '1.5rem', 
            fontStyle: 'italic', 
            marginBottom: '20px',
            color: '#88d8b0',
            lineHeight: 1.4
          }}>
            "{slide.content.statement}"
          </p>
        )}
        
        {slide.content.elaboration && (
          <p style={{ 
            fontSize: '1.1rem',
            lineHeight: 1.5,
            color: '#c0c0c0'
          }}>
            {slide.content.elaboration}
          </p>
        )}

        {slide.content.definition && (
          <p style={{ 
            fontSize: '1.3rem',
            lineHeight: 1.5,
            color: '#c0c0c0',
            marginTop: '20px'
          }}>
            {slide.content.definition}
          </p>
        )}

        {slide.content.formula && (
          <p style={{ 
            fontSize: '1.4rem',
            lineHeight: 1.5,
            color: '#ffd93d',
            marginTop: '20px',
            fontWeight: 'bold'
          }}>
            {slide.content.formula}
          </p>
        )}

        {slide.content.oldBelief && (
          <div style={{ marginTop: '30px' }}>
            <p style={{ 
              fontSize: '1.1rem',
              color: '#ff6b6b',
              marginBottom: '15px'
            }}>
              Old Belief: "{slide.content.oldBelief}"
            </p>
            {slide.content.explanation && (
              <p style={{ 
                fontSize: '1.1rem',
                color: '#c0c0c0',
                marginBottom: '15px'
              }}>
                {slide.content.explanation}
              </p>
            )}
          </div>
        )}

        {slide.content.newBelief && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ 
              fontSize: '1.2rem',
              color: '#88d8b0',
              marginBottom: '15px'
            }}>
              New Belief: "{slide.content.newBelief}"
            </p>
            {slide.content.challenge && (
              <p style={{ 
                fontSize: '1.1rem',
                color: '#ffd93d',
                fontStyle: 'italic'
              }}>
                {slide.content.challenge}
              </p>
            )}
          </div>
        )}

        {/* Handle arrays - problems, benefits, levels, parts, concepts */}
        {slide.content.problems && (
          <div style={{ marginTop: '20px' }}>
            {slide.content.problems.map((problem, index) => (
              <p key={index} style={{ 
                fontSize: '1.2rem',
                color: '#ff6b6b',
                marginBottom: '10px'
              }}>
                • {problem}
              </p>
            ))}
          </div>
        )}

        {slide.content.benefits && (
          <div style={{ marginTop: '20px' }}>
            {slide.content.benefits.map((benefit, index) => (
              <p key={index} style={{ 
                fontSize: '1.2rem',
                color: '#88d8b0',
                marginBottom: '10px'
              }}>
                • {benefit}
              </p>
            ))}
          </div>
        )}

        {slide.content.levels && (
          <div style={{ marginTop: '20px' }}>
            {slide.content.levels.map((level, index) => (
              <p key={index} style={{ 
                fontSize: '1.1rem',
                color: '#e0e0e0',
                marginBottom: '10px'
              }}>
                {level}
              </p>
            ))}
          </div>
        )}

        {slide.content.parts && (
          <div style={{ marginTop: '20px' }}>
            {slide.content.parts.map((part, index) => (
              <p key={index} style={{ 
                fontSize: '1.2rem',
                color: '#667eea',
                marginBottom: '10px'
              }}>
                • {part}
              </p>
            ))}
          </div>
        )}

        {slide.content.concepts && (
          <div style={{ marginTop: '20px' }}>
            {slide.content.concepts.map((concept, index) => (
              <p key={index} style={{ 
                fontSize: '1.1rem',
                color: '#88d8b0',
                marginBottom: '10px'
              }}>
                • {concept}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;