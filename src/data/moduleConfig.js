// Module configuration for the entire course
export const modules = {
  module1: {
    id: 'module1',
    title: 'Module 1',
    fullTitle: 'Identity & Presuppositions',
    description: 'Establish an optimal mindset using NLP, psychocybernetics, and the self-concept model',
    color: '#9333EA', // Purple
    icon: '🧠',
    totalSlides: 48,
    sections: [
      'Introduction',
      'Approach',
      'Presuppositions (1-10)',
      'Money Mindset',
      'Self-Concept & Values'
    ]
  },
  module2: {
    id: 'module2',
    title: 'Module 2',
    fullTitle: 'Vision & Mission',
    description: 'Establish your vision and align your actions to manifest that vision in reality',
    color: '#0EA5E9', // Sky blue
    icon: '🎯',
    totalSlides: 0,
    sections: [
      'Purpose Foundation',
      'Vision Creation',
      'Mission Development',
      'Values Alignment',
      'Circle of Competence'
    ]
  },
  module3: {
    id: 'module3',
    title: 'Module 3',
    fullTitle: 'Strategic Thinking & Frameworks',
    description: 'Develop strategic thinking skills and apply frameworks to achieve your goals',
    color: '#10B981', // Emerald
    icon: '🏗️',
    totalSlides: 0,
    sections: [
      'Strategic Foundation',
      'Mental Models',
      'Systems Thinking',
      'Personal Brand Strategy',
      'Implementation Systems'
    ]
  }
};

export const getModuleById = (moduleId) => modules[moduleId];
export const getModuleList = () => Object.values(modules);
