import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';
import swaggerSetup from './swagger';

// Middleware - error handler must go inside routes as this needs
// to be the last app.use and applied after routes is defined
import { example, example1 } from '../middleware';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Middleware applied to all routes
app.use(example, example1);
app.use(compression());

// use morgan to log requests to the console
app.use(morgan('dev'));

// If swagger is enabled then load in config etc
if (config.get('server.swagger.enable')) {
  app.use('/docs', swaggerSetup());
}

export default {
  create() {
    return app;
  },
};
