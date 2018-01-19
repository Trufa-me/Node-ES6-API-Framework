import routes from '../routes';
import { errorHandler, invalidEndpoint } from '../middleware';

export default {
  register(app) {
    // Prevent 404 when locating favicon
    app.get('/favicon.ico', (req, res) => res.sendStatus(204));
    // All routes start with api
    // Then split off into versions inside routes
    app.use('/api', routes);
    // Check for invalid endpoint
    app.use(invalidEndpoint);
    // Error handler - must be last to pick up errors
    app.use(errorHandler);
  },
};
