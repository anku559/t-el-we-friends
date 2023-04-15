import { env } from 'process';

const {
  API_PREFIX,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  PORT,
} = env;

export default {
  API_PREFIX,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  PORT,
};
