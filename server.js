import './config/env.js';
import ENV from './variables.js';
import './config/db.js';
import app from './app.js';

app.listen(ENV.PORT);
