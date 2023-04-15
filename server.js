import { resolve } from 'path';
import './config/env.js';
import ENV from './variables.js';
import './config/db.js';
import app from './app.js';
import routes from './routes/index.routes.js';
import { checkAndCreateDir } from './helpers/core/file-system.js';

const dirname = resolve();

// INITIAL SEEDING
const DIR = [
  `${dirname}/uploads`,
  `${dirname}/uploads/temp`,
  `${dirname}/uploads/image-cover`,
  `${dirname}/uploads/image-profile`,
];

checkAndCreateDir(DIR);

app.listen(ENV.PORT, () => {
  routes(app);
});
