export default function normalScenario() {
  const temperature = 22 + Math.random() * 1.2; // 22.0 - 23.2
  const noise = 45 + Math.random() * 5; // 45 - 50 dB
  const light = 500 + Math.random() * 50; // 500 - 550 lux
  const iea = 15 + Math.random() * 8; // 15 - 23

  return { temperature, noise, light, iea };
}
