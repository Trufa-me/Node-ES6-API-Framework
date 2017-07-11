import routes from '../routes/example';

export default {
  register(app) {
    // Prevent 404 when locating favicon
    app.get('/favicon.ico', (req, res) => res.sendStatus(204));
    app.get('/v1/someapi/async', routes.asyncExample);
    app.get('/v1/someapi/promise', routes.promiseExample);
    app.post('/v1/someapi/example', routes.asyncExample);
  },
};
