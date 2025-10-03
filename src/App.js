import React, { useState } from 'react';
import { ModuleProvider, useModule } from './contexts/ModuleContext';
import Slideshow from './components/Slideshow';
import ModuleSelector from './components/ModuleSelector';

// This component has access to the ModuleContext
const AppContent = () => {
  const { currentModule, modules } = useModule();
  const [showModuleSelector, setShowModuleSelector] = useState(false);
  
  // Check if current module is available
  const isModuleAvailable = modules[currentModule]?.totalSlides > 0;

  // If module is not available or user wants to see selector, show it
  if (!isModuleAvailable || showModuleSelector) {
    return (
      <>
        <ModuleSelector />
        {/* Back button if we're viewing selector but have a module available */}
        {isModuleAvailable && showModuleSelector && (
          <button
            onClick={() => setShowModuleSelector(false)}
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              padding: '12px 24px',
              backgroundColor: modules[currentModule].color,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            ← Back to Slides
          </button>
        )}
      </>
    );
  }

  // Show the slideshow with a button to return to module selector
  return (
    <>
      <Slideshow moduleId={currentModule} />
      
      {/* Module Selector Button - Top Right */}
      <button
        onClick={() => setShowModuleSelector(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '12px 24px',
          backgroundColor: modules[currentModule].color,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          boxShadow: `0 4px 12px ${modules[currentModule].color}40`
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = `0 6px 20px ${modules[currentModule].color}60`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = `0 4px 12px ${modules[currentModule].color}40`;
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>{modules[currentModule].icon}</span>
        Modules
      </button>
    </>
  );
};

// Main App component wraps everything with ModuleProvider
function App() {
  return (
    <ModuleProvider>
      <AppContent />
    </ModuleProvider>
  );
}

export default App;
