// Main slide content aggregator
import { titleSection } from './sections/titleSection';
import { introSection } from './sections/introSection';
import { approachSection } from './sections/approachSection';
import { presuppositionsSection } from './sections/presuppositionsSection';
import { moneyPresuppositionsSection } from './sections/moneyPresuppositionsSection';
import { selfConceptSection } from './sections/selfConceptSection';
import { valuesSection } from './sections/valuesSection';

// Import individual presuppositions
import { presupposition1 } from './presuppositions/presupposition1';
import { presupposition2 } from './presuppositions/presupposition2';
import { presupposition3 } from './presuppositions/presupposition3';
import { presupposition4 } from './presuppositions/presupposition4';
import { presupposition5 } from './presuppositions/presupposition5';
import { presupposition6 } from './presuppositions/presupposition6';
import { presupposition7 } from './presuppositions/presupposition7';
import { presupposition8 } from './presuppositions/presupposition8';
import { presupposition9 } from './presuppositions/presupposition9';
import { presupposition10 } from './presuppositions/presupposition10';

// Import navigation map
import { navigationMap } from './navigationMap';

// Aggregate all content
export const slideContent = {
  ...titleSection,
  ...introSection,
  ...approachSection,
  ...presuppositionsSection,
  ...presupposition1,
  ...presupposition2,
  ...presupposition3,
  ...presupposition4,
  ...presupposition5,
  ...presupposition6,
  ...presupposition7,
  ...presupposition8,
  ...presupposition9,
  ...presupposition10,
  ...moneyPresuppositionsSection,
  ...valuesSection,
  ...selfConceptSection
};

// Export navigation map
export { navigationMap };
