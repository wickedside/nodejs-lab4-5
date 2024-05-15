import app from './app';
import logger from './utils/logger';
import { PORT } from './common/config';

process.on('uncaughtException', (error: Error) => {
  logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
  process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
  logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
  process.exit(1);
});

app.listen(PORT, () => {
  logger.info(`App is running on http://localhost:${PORT}`);
});

// строки для проверки
// setTimeout(() => {
//  throw new Error('Oops! uncaughtException');
// }, 1000);

setTimeout(() => {
  Promise.reject(new Error('Oops! unhandledRejection'));
}, 2000);