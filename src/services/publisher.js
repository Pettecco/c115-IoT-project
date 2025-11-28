import logger from '../utils/logger.js';

export function sendValues(client, values) {
  const topics = {
    temperature: 'ds/temperature',
    noise: 'ds/noise',
    light: 'ds/light',
    iea: 'ds/iea',
  };

  for (const [key, value] of Object.entries(values)) {
    const rounded = Number(value.toFixed(2));

    const topic = topics[key];
    if (topic) {
      client.publish(topic, String(rounded));
      logger.info({ [key]: rounded }, `Publicado ${key}`);
    }
  }
}
