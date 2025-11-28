import { sendValues } from '../services/publisher.js';

export default function moderate() {
  const temperature = 24 + Math.random() * 2; // 24.0 - 26.0
  const noise = 55 + Math.random() * 10; // 55 - 65
  const light = 600 + Math.random() * 80; // 600 - 680
  const iea = 35 + Math.random() * 12; // 35 - 47

  return { temperature, noise, light, iea };
}
