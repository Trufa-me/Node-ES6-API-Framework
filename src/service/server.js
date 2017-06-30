import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import middleware from '../middleware';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Middleware applied to all routes
app.use(middleware.example);
app.use(compression());

// use morgan to log requests to the console
app.use(morgan('dev'));

export default {
  create() {
    return app;
  },
};
