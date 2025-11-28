import pino from 'pino';
import dayjs from 'dayjs';

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
    },
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logger;
