import { env } from 'process';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, PORT } = env;

export default {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
};
