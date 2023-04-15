import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

export default app;
