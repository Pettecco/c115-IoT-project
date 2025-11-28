import dotenv from 'dotenv';
import mqtt from 'mqtt';
import logger from '../utils/logger.js';

dotenv.config();

export function createMqttClient() {
  const host = process.env.MQTT_HOST;
  const port = Number(process.env.MQTT_PORT);
  const token = process.env.BLYNK_TOKEN;

  const url = `mqtt://${host}:${port}`;

  const client = mqtt.connect(url, {
    username: 'device',
    password: token,
    clientId: 'workstress-sim',
    keepalive: 45,
    clean: true,
  });

  client.on('connect', () => logger.info('Conectado ao Blynk MQTT'));
  client.on('error', (err) => logger.error({ err }, 'Erro MQTT'));
  client.on('reconnect', () => logger.warn('Reconectando ao Blynk...'));
  client.on('close', () => logger.warn('MQTT desconectado'));

  return client;
}
