import { serve, setup } from 'swagger-ui-express';
import { compose } from 'compose-middleware';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const retrieveSwaggerDocument = filename => {
  const location = path.join(process.cwd(), filename || 'swagger.json');

  return new Promise((resolve, reject) =>
    fs.readFile(location, (err, data) => {
      if (err)
        return reject(
          `Oooops... It seems we cannot locate a swagger.json file - this should be in the root of your project.`,
        );
      return resolve(JSON.parse(data));
    }),
  );
};

function swaggerSetup(app, showExplorer = true, doc = null, options = {}) {
  return async (req, res, next) => {
    try {
      const document = await retrieveSwaggerDocument(doc);

      return compose([
        serve,
        setup(document, showExplorer, {
          validatorUrl: null,
          docExpansion: 'list',
          ...options,
        }),
      ])(req, res, next);
    } catch (error) {
      console.log(chalk.red(error));
      return next({
        status: 404,
        message: error,
      });
    }
  };
}

export default swaggerSetup;
