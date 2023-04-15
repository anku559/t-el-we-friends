import { resolve, join } from 'path';
import { config } from 'dotenv';

const ENV_PATH = join(resolve(), '.env');

config(ENV_PATH);
