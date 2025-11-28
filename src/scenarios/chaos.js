import { sendValues } from '../services/publisher.js';

export default function chaos() {
  const temperature = 29 + Math.random() * 3; // 29 - 32
  const noise = 85 + Math.random() * 25; // 85 - 110
  const light = 100 + Math.random() * 600; // 100 - 700
  const iea = 80 + Math.random() * 18; // 80 - 98

  return { temperature, noise, light, iea };
}
