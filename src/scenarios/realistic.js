let currentTemp = 23;
let currentNoise = 50;
let currentLight = 550;

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function normalizeTemp(T) {
  const T_low = clamp01((22 - T) / 2.0); // frio
  const T_high = clamp01((T - 24) / 4.0); // quente
  return Math.max(T_low, T_high);
}

function normalizeNoise(N) {
  return clamp01((N - 55) / 30.0);
}

function normalizeLight(L) {
  const L_low = clamp01((300 - L) / 300.0);
  const L_high = clamp01((L - 500) / 500.0);
  return Math.max(L_low, L_high);
}

export default function realisticScenario() {
  // ---------------------------
  // TEMPERATURA (variação lenta)
  // ---------------------------
  const tempDrift = (Math.random() - 0.5) * 0.3;
  currentTemp += tempDrift;
  currentTemp = Math.min(Math.max(currentTemp, 20), 30);

  // ---------------------------
  // RUÍDO (picos aleatórios)
  // ---------------------------
  if (Math.random() < 0.1) {
    currentNoise += 15 + Math.random() * 10; // pico repentino
  } else {
    currentNoise += (Math.random() - 0.5) * 2; // variação normal
  }
  currentNoise = Math.min(Math.max(currentNoise, 35), 100);

  // ---------------------------
  // LUZ (variação suave + quedas raras)
  // ---------------------------
  const lightChange = (Math.random() - 0.5) * 40;
  currentLight += lightChange;

  if (Math.random() < 0.05) {
    currentLight -= 100; // queda repentina
  }

  currentLight = Math.min(Math.max(currentLight, 100), 1500);

  // ---------------------------
  // IEA (usando as mesmas normalizações dos outros cenários)
  // ---------------------------
  const Tn = normalizeTemp(currentTemp);
  const Nn = normalizeNoise(currentNoise);
  const Ln = normalizeLight(currentLight);

  const iea = (0.35 * Tn + 0.45 * Nn + 0.2 * Ln) * 100;

  return {
    temperature: currentTemp,
    noise: currentNoise,
    light: currentLight,
    iea,
  };
}
