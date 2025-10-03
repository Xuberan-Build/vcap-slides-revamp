import React, { createContext, useContext, useState, useEffect } from 'react';
import { modules } from '../data/moduleConfig';

const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [currentModule, setCurrentModule] = useState('module1');
  const [moduleProgress, setModuleProgress] = useState({
    module1: { completed: 0, total: 48, visitedSlides: new Set() },
    module2: { completed: 0, total: 0, visitedSlides: new Set() },
    module3: { completed: 0, total: 0, visitedSlides: new Set() }
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('vcap-module-progress');
    const savedModule = localStorage.getItem('vcap-current-module');
    
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      // Convert arrays back to Sets
      Object.keys(parsed).forEach(key => {
        parsed[key].visitedSlides = new Set(parsed[key].visitedSlides);
      });
      setModuleProgress(parsed);
    }
    
    if (savedModule) {
      setCurrentModule(savedModule);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    const progressToSave = {};
    Object.keys(moduleProgress).forEach(key => {
      progressToSave[key] = {
        ...moduleProgress[key],
        visitedSlides: Array.from(moduleProgress[key].visitedSlides)
      };
    });
    localStorage.setItem('vcap-module-progress', JSON.stringify(progressToSave));
  }, [moduleProgress]);

  // Save current module to localStorage
  useEffect(() => {
    localStorage.setItem('vcap-current-module', currentModule);
  }, [currentModule]);

  const switchModule = (moduleId) => {
    if (modules[moduleId]) {
      setCurrentModule(moduleId);
    }
  };

  const markSlideVisited = (moduleId, slideCoords) => {
    setModuleProgress(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        visitedSlides: new Set([...prev[moduleId].visitedSlides, slideCoords]),
        completed: prev[moduleId].visitedSlides.size + 1
      }
    }));
  };

  const getModuleCompletion = (moduleId) => {
    const progress = moduleProgress[moduleId];
    if (!progress || progress.total === 0) return 0;
    return Math.round((progress.completed / progress.total) * 100);
  };

  return (
    <ModuleContext.Provider
      value={{
        currentModule,
        switchModule,
        moduleProgress,
        markSlideVisited,
        getModuleCompletion,
        modules
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

export const useModule = () => {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModule must be used within ModuleProvider');
  }
  return context;
};
