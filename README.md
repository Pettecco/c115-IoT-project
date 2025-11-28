# IoT MQTT Publisher (Blynk) — Visão Geral

Este repositório contém um exemplo simples de um dispositivo IoT que publica dados via MQTT para o serviço Blynk.

**Visão Geral**

- Objetivo: simular um dispositivo que conecta ao broker MQTT do Blynk e publica leituras (temperatura, ruído, luminosidade, etc.).
- Arquivos principais: `src/index.js` (entrypoint) e `src/services/publisher.js` (lógica de publicação).

**Pré-requisitos**

- Node.js (recomendado >= 18). Verifique com `node --version`.
- npm para instalar dependências.

**Instalação**

```bash
npm install
```

**Configurar variáveis de ambiente**

Há um arquivo de exemplo `.env.example` na raiz do projeto. Para rodar localmente:

```bash
cp .env.example .env
# então edite `.env` e substitua o token por seu valor
```

O `.env` contém, por exemplo, `BLYNK_TOKEN`, `MQTT_HOST` e `MQTT_PORT`. O projeto já possui a dependência `dotenv` para carregar esse arquivo automaticamente (se o código chamar `dotenv.config()`).

**Como rodar (exemplos)**

Executar diretamente com `node` e passar flags para controlar o cenário e o intervalo (exemplo fornecido):

```bash
node src/index.js --scenario realistic --interval 2000
```

**Arquivos úteis**

- `src/index.js` — conexão MQTT e publicações iniciais.
- `src/services/publisher.js` — funções de publicação reutilizáveis (se existentes).
