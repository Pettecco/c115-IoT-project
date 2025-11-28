import minimist from 'minimist';
import logger from './utils/logger.js';
import { createMqttClient } from './config/mqtt.js';
import { sendValues } from './services/publisher.js';
import { getScenario } from './runner.js';

const args = minimist(process.argv.slice(2));
const scenarioName = args.scenario || 'realistic';
const interval = Number(args.interval) || 3000;

logger.info(`Iniciando Work Stress Monitor`);
logger.info(`Cenário: ${scenarioName}`);
logger.info(`Intervalo: ${interval}ms`);

const client = createMqttClient();
const scenario = getScenario(scenarioName);

setInterval(() => {
  const values = scenario();
  sendValues(client, values);
}, interval);
