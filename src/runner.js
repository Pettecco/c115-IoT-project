import normal from './scenarios/normal.js';
import moderate from './scenarios/moderate.js';
import stress from './scenarios/stress.js';
import chaos from './scenarios/chaos.js';
import realistic from './scenarios/realistic.js';
import logger from './utils/logger.js';

export const scenarios = {
  normal,
  moderate,
  stress,
  chaos,
  realistic,
};

export function getScenario(name) {
  if (!scenarios[name]) {
    logger.warn(`Cenário "${name}" não encontrado. Usando o cenário "realistic" como padrão.`);
    return scenarios['realistic'];
  }

  return scenarios[name];
}
