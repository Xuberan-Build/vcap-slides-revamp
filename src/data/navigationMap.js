// Complete navigation mapping with all sections and presuppositions
export const navigationMap = new Map([
  // Title (x=0)
  ['0,0', { content: 'title.main', connections: { right: '1,0' }}],
  
  // Introduction (x=1)
  ['1,0', { content: 'intro.authority', connections: { left: '0,0', down: '1,1', right: '2,0' }}],
  ['1,1', { content: 'intro.evidence', connections: { up: '1,0', left: '0,0', right: '2,0' }}],
  
  // Approach (x=2)
  ['2,0', { content: 'approach.problem', connections: { left: '1,0', down: '2,1', right: '3,0' }}],
  ['2,1', { content: 'approach.solution', connections: { up: '2,0', down: '2,2', left: '1,0', right: '3,0' }}],
  ['2,2', { content: 'approach.results', connections: { up: '2,1', left: '1,0', right: '3,0' }}],
  
  // Presuppositions Foundation (x=3)
  ['3,0', { content: 'presuppositions.intro', connections: { left: '2,0', down: '3,1', right: '4,0' }}],
  ['3,1', { content: 'presuppositions.matrix', connections: { up: '3,0', left: '2,0', right: '4,0' }}],
  
  // Presupposition 1 (x=4)
  ['4,0', { content: 'p1.problem', connections: { left: '3,0', down: '4,1', right: '5,0' }}],
  ['4,1', { content: 'p1.solution', connections: { up: '4,0', left: '3,0', right: '5,0' }}],
  
  // Presupposition 2 (x=5)
  ['5,0', { content: 'p2.problem', connections: { left: '4,0', down: '5,1', right: '6,0' }}],
  ['5,1', { content: 'p2.solution', connections: { up: '5,0', left: '4,0', right: '6,0' }}],
  
  // Presupposition 3 (x=6)
  ['6,0', { content: 'p3.problem', connections: { left: '5,0', down: '6,1', right: '7,0' }}],
  ['6,1', { content: 'p3.solution', connections: { up: '6,0', left: '5,0', right: '7,0' }}],
  
  // Presupposition 4 (x=7)
  ['7,0', { content: 'p4.problem', connections: { left: '6,0', down: '7,1', right: '8,0' }}],
  ['7,1', { content: 'p4.solution', connections: { up: '7,0', left: '6,0', right: '8,0' }}],
  
  // Presupposition 5 (x=8)
  ['8,0', { content: 'p5.problem', connections: { left: '7,0', down: '8,1', right: '9,0' }}],
  ['8,1', { content: 'p5.solution', connections: { up: '8,0', left: '7,0', right: '9,0' }}],
  
  // Presupposition 6 (x=9)
  ['9,0', { content: 'p6.problem', connections: { left: '8,0', down: '9,1', right: '10,0' }}],
  ['9,1', { content: 'p6.solution', connections: { up: '9,0', left: '8,0', right: '10,0' }}],
  
  // Presupposition 7 (x=10)
  ['10,0', { content: 'p7.problem', connections: { left: '9,0', down: '10,1', right: '11,0' }}],
  ['10,1', { content: 'p7.solution', connections: { up: '10,0', left: '9,0', right: '11,0' }}],
  
  // Presupposition 8 (x=11)
  ['11,0', { content: 'p8.problem', connections: { left: '10,0', down: '11,1', right: '12,0' }}],
  ['11,1', { content: 'p8.solution', connections: { up: '11,0', left: '10,0', right: '12,0' }}],
  
  // Presupposition 9 (x=12)
  ['12,0', { content: 'p9.problem', connections: { left: '11,0', down: '12,1', right: '13,0' }}],
  ['12,1', { content: 'p9.solution', connections: { up: '12,0', left: '11,0', right: '13,0' }}],
  
  // Presupposition 10 (x=13)
  ['13,0', { content: 'p10.problem', connections: { left: '12,0', down: '13,1', right: '14,0' }}],
  ['13,1', { content: 'p10.solution', connections: { up: '13,0', down: '13,2', left: '12,0', right: '14,0' }}],
  ['13,2', { content: 'p10.bonus', connections: { up: '13,1', left: '12,0', right: '14,0' }}],
  
  // Money Mindset Presuppositions (x=14)
  ['14,0', { content: 'moneyMindset.intro', connections: { left: '13,0', down: '14,1', right: '15,0' }}],
  ['14,1', { content: 'moneyMindset.energy', connections: { up: '14,0', down: '14,2', left: '13,0', right: '15,0' }}],
  ['14,2', { content: 'moneyMindset.abundance', connections: { up: '14,1', down: '14,3', left: '13,0', right: '15,0' }}],
  ['14,3', { content: 'moneyMindset.detachment', connections: { up: '14,2', down: '14,4', left: '13,0', right: '15,0' }}],
  ['14,4', { content: 'moneyMindset.value', connections: { up: '14,3', left: '13,0', right: '15,0' }}],
  
  // Self-Concept Model (x=15)
  ['15,0', { content: 'selfConcept.intro', connections: { left: '14,0', down: '15,1', right: '16,0' }}],
  ['15,1', { content: 'selfConcept.hierarchy', connections: { up: '15,0', down: '15,2', left: '14,0', right: '16,0' }}],
  ['15,2', { content: 'selfConcept.neuroscience', connections: { up: '15,1', left: '14,0', right: '16,0' }}],
  
  // Values (x=16)
  ['16,0', { content: 'values.importance', connections: { left: '15,0', down: '16,1' }}],
  ['16,1', { content: 'values.process', connections: { up: '16,0', down: '16,2', left: '15,0' }}],
  ['16,2', { content: 'values.alignment', connections: { up: '16,1', left: '15,0' }}]
]);
