import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InnerOuterAlignmentVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 1,
      title: "Identity Transformation First",
      description: "We begin by aligning your self-concept with your highest values, creating certainty about who you are at your core.",
      color: "#ffd93d",
      radius: 80,
      particles: 8
    },
    {
      id: 2,
      title: "Presupposition Shifting", 
      description: "We identify and transform limiting beliefs that have been unconsciously filtering your perception of reality.",
      color: "#88d8b0",
      radius: 120,
      particles: 12
    },
    {
      id: 3,
      title: "State Management Mastery",
      description: "You'll learn to access peak mental and emotional states on demand, rather than being at the mercy of circumstances.",
      color: "#667eea",
      radius: 160,
      particles: 16
    },
    {
      id: 4,
      title: "Value-Based Decision Making",
      description: "All business decisions become clearer when filtered through your authentic values.",
      color: "#764ba2",
      radius: 200,
      particles: 20
    },
    {
      id: 5,
      title: "Behavioral Flexibility",
      description: "True success comes from adapting to situations while remaining aligned with your core identity.",
      color: "#f093fb",
      radius: 240,
      particles: 24
    }
  ];

  // Auto-play animation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % (steps.length + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  // Generate particles for sacred geometry patterns
  const generateParticles = (step, index) => {
    const particles = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle for spiral
    
    for (let i = 0; i < step.particles; i++) {
      const angle = i * goldenAngle;
      const radius = step.radius * (0.8 + Math.sin(i * 0.5) * 0.2);
      
      particles.push({
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        delay: i * 0.1
      });
    }
    
    return particles;
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}>
      
      {/* Left Side - Title and Control */}
      <div style={{ flex: 1, padding: '40px', maxWidth: '500px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffd93d, #88d8b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.2
          }}
        >
          The Inner-Outer Alignment Method
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '1.1rem', 
            marginBottom: '30px',
            lineHeight: 1.5,
            color: '#e0e0e0'
          }}
        >
          My approach differs because it addresses entrepreneurship from the inside out:
        </motion.p>

        {/* Step Details */}
        <AnimatePresence mode="wait">
          {activeStep > 0 && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: `2px solid ${steps[activeStep - 1]?.color}`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{ 
                color: steps[activeStep - 1]?.color,
                fontSize: '1.2rem',
                marginBottom: '10px'
              }}>
                {activeStep}. {steps[activeStep - 1]?.title}
              </h3>
              <p style={{ 
                color: '#e0e0e0',
                lineHeight: 1.4,
                fontSize: '0.95rem'
              }}>
                {steps[activeStep - 1]?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play Controls */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: 'rgba(255, 217, 61, 0.2)',
            border: '2px solid #ffd93d',
            borderRadius: '20px',
            color: '#ffd93d',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 217, 61, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
        </motion.button>
      </div>

      {/* Right Side - Consciousness Tree Visualization */}
      <div style={{ 
        flex: 1, 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}>
        
        {/* Central Core - Always visible */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffd93d 0%, #ff9a9e 100%)',
            boxShadow: '0 0 40px rgba(255, 217, 61, 0.6)',
            zIndex: 10
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </motion.div>

        {/* Expanding Rings */}
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={activeStep >= step.id ? {
              scale: 1,
              opacity: [0, 0.7, 0.3],
              rotate: 360
            } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              width: `${step.radius * 1.2}px`,
              height: `${step.radius * 1.2}px`,
              border: `2px solid ${step.color}`,
              borderRadius: '50%',
              borderStyle: 'dashed',
              borderDasharray: '8 4'
            }}
          />
        ))}

        {/* Sacred Geometry Particles */}
        {steps.map((step, stepIndex) => 
          generateParticles(step, stepIndex).slice(0, step.particles / 2).map(particle => (
            <motion.div
              key={`${step.id}-${particle.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={activeStep >= step.id ? {
                scale: [0, 1, 0.8],
                opacity: [0, 1, 0.6],
                x: particle.x * 0.8,
                y: particle.y * 0.8,
              } : { scale: 0, opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: stepIndex * 0.3 + particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: step.color,
                boxShadow: `0 0 12px ${step.color}`,
                zIndex: 5
              }}
            />
          ))
        )}

        {/* Progress Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          display: 'flex',
          gap: '8px'
        }}>
          {[0, ...steps.map(s => s.id)].map(stepId => (
            <motion.div
              key={stepId}
              onClick={() => {
                setActiveStep(stepId);
                setIsAutoPlaying(false);
              }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: activeStep === stepId ? '#ffd93d' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.5)'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

const MindMatrixEquation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeFilter, setActiveFilter] = useState('limiting');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Simplified color scheme - blues and ambers for clarity
  const colors = {
    primary: '#3b82f6',    // Blue
    accent: '#f59e0b',     // Amber
    limiting: '#dc2626',   // Red
    empowering: '#059669', // Green
    neutral: '#6b7280'     // Gray
  };

  const formulaSteps = [
    { 
      text: "Presuppositions", 
      color: colors.accent,
      symbol: "P",
      description: "Core beliefs & assumptions"
    },
    { 
      text: "Perception", 
      color: colors.primary,
      symbol: "Pe",
      description: "How you interpret information"
    },
    { 
      text: "Decisions", 
      color: colors.primary,
      symbol: "D",
      description: "Choices based on perception"
    },
    { 
      text: "Actions", 
      color: colors.primary,
      symbol: "A",
      description: "What you actually do"
    },
    { 
      text: "Results", 
      color: colors.accent,
      symbol: "R",
      description: "Outcomes you create"
    }
  ];

  const filterExamples = {
    limiting: {
      name: "Limiting Filter",
      color: colors.limiting,
      belief: "\"I'm not capable enough\"",
      transformations: [
        { input: "New Opportunity", output: "Too risky for me" },
        { input: "Challenge", output: "I'll probably fail" },
        { input: "Feedback", output: "Criticism of my flaws" }
      ]
    },
    empowering: {
      name: "Empowering Filter",
      color: colors.empowering,
      belief: "\"I am capable and growing\"",
      transformations: [
        { input: "New Opportunity", output: "Perfect growth chance" },
        { input: "Challenge", output: "Learning opportunity" },
        { input: "Feedback", output: "Valuable guidance" }
      ]
    }
  };

  // Auto-advance through formula steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % (formulaSteps.length + 1));
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, formulaSteps.length]);

  const currentFilter = filterExamples[activeFilter];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      width: '100%', 
      height: '100%', 
      padding: '40px',
      backgroundColor: '#1a1a1a',
      color: 'white'
    }}>
      
      {/* Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontSize: '2.2rem', 
            marginBottom: '15px',
            background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          The Consciousness Equation
        </motion.h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#cbd5e1',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Your presuppositions determine everything that follows
        </p>
      </div>

      {/* Mathematical Equation Display */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '50px',
        gap: '20px',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        {formulaSteps.map((step, index) => (
          <React.Fragment key={step.text}>
            <motion.div
              animate={{ 
                opacity: currentStep > index ? 1 : 0.4,
                scale: currentStep === index + 1 ? 1.1 : 1,
                y: currentStep === index + 1 ? -5 : 0
              }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '15px',
                borderRadius: '12px',
                background: currentStep === index + 1 ? `${step.color}20` : 'transparent',
                border: currentStep === index + 1 ? `2px solid ${step.color}` : '2px solid transparent',
                minWidth: '120px'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: step.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                {step.symbol}
              </div>
              <div style={{ color: step.color, fontSize: '0.9rem', textAlign: 'center' }}>
                {step.text}
              </div>
              {currentStep === index + 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ 
                    fontSize: '0.7rem', 
                    color: '#94a3b8', 
                    marginTop: '5px',
                    textAlign: 'center',
                    lineHeight: 1.3
                  }}
                >
                  {step.description}
                </motion.div>
              )}
            </motion.div>
            
            {index < formulaSteps.length - 1 && (
              <motion.div
                animate={{ 
                  opacity: currentStep > index ? 1 : 0.3,
                  x: currentStep > index ? [0, 5, 0] : 0
                }}
                transition={{ 
                  x: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                style={{ 
                  fontSize: '2rem', 
                  color: colors.neutral,
                  fontWeight: 'normal'
                }}
              >
                →
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Filter Demonstration */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '60px',
        marginBottom: '40px'
      }}>
        
        {/* Input Examples */}
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ 
            color: '#e2e8f0', 
            marginBottom: '20px',
            fontSize: '1.1rem'
          }}>
            Raw Information
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentFilter.transformations.map((item, index) => (
              <motion.div
                key={index}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  padding: '10px 15px',
                  background: `${colors.primary}20`,
                  border: `1px solid ${colors.primary}`,
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: colors.primary,
                  minWidth: '150px'
                }}
              >
                {item.input}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Lens */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: `4px solid ${currentFilter.color}`,
              background: `conic-gradient(from 0deg, ${currentFilter.color}30, transparent, ${currentFilter.color}30)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 30px ${currentFilter.color}40`,
              fontSize: '0.8rem',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            FILTER
          </motion.div>
          
          <div style={{ 
            marginTop: '15px', 
            fontSize: '0.9rem', 
            color: currentFilter.color,
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            {currentFilter.belief}
          </div>
        </div>

        {/* Output Results */}
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ 
            color: '#e2e8f0', 
            marginBottom: '20px',
            fontSize: '1.1rem'
          }}>
            Your Reality
          </h4>
          <AnimatePresence mode="wait">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentFilter.transformations.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    padding: '10px 15px',
                    background: `${currentFilter.color}20`,
                    border: `1px solid ${currentFilter.color}`,
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: currentFilter.color,
                    minWidth: '150px'
                  }}
                >
                  {item.output}
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '20px',
        marginTop: 'auto'
      }}>
        
        {/* Filter Toggle */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {Object.entries(filterExamples).map(([key, filter]) => (
            <motion.button
              key={key}
              onClick={() => {
                setActiveFilter(key);
                setIsAutoPlaying(false);
              }}
              style={{
                padding: '10px 20px',
                background: activeFilter === key ? filter.color : 'transparent',
                border: `2px solid ${filter.color}`,
                borderRadius: '25px',
                color: activeFilter === key ? 'white' : filter.color,
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        {/* Play Control */}
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          style={{
            padding: '10px 20px',
            background: `${colors.accent}20`,
            border: `2px solid ${colors.accent}`,
            borderRadius: '25px',
            color: colors.accent,
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
        </motion.button>
      </div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '15px 30px',
          background: `${colors.accent}15`,
          border: `2px solid ${colors.accent}`,
          borderRadius: '30px',
          fontSize: '1.1rem',
          color: colors.accent,
          fontWeight: 'bold',
          maxWidth: '500px',
          margin: '30px auto 0'
        }}
      >
        💡 Change P (Presuppositions) → Change R (Results)
      </motion.div>
    </div>
  );
};

const EnhancedSlide = ({ slide, isTransitioning }) => {
  // Check if this slide needs special visualization
  if (slide.content.visualization === 'inner-outer-alignment') {
    return (
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'opacity 0.15s ease-in-out',
        opacity: isTransitioning ? 0.3 : 1,
        transform: `scale(${isTransitioning ? 0.98 : 1})`,
        minHeight: '500px'
      }}>
        <InnerOuterAlignmentVisualization />
      </div>
    );
  }

  // Check for Mind Matrix visualization
  if (slide.content.visualization === 'mind-matrix') {
    return (
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'opacity 0.15s ease-in-out',
        opacity: isTransitioning ? 0.3 : 1,
        transform: `scale(${isTransitioning ? 0.98 : 1})`,
        minHeight: '500px'
      }}>
        <MindMatrixEquation />
      </div>
    );
  }

  // Fallback to default slide rendering
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
        
        {/* Add all your existing slide content rendering here */}
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
      </div>
    </div>
  );
};

export default EnhancedSlide;