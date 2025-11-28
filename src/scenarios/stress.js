export default function stressScenario() {
  const temperature = 27 + Math.random() * 2.5; // 27.0 - 29.5
  const noise = 70 + Math.random() * 12; // 70 - 82 dB
  const light = 300 + Math.random() * 120; // 300 - 420 lux
  const iea = 60 + Math.random() * 20; // 60 - 80

  return { temperature, noise, light, iea };
}
