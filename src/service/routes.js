import routes from '../routes/example';

export default {
  register(app) {
    app.get('/v1/someapi/async', routes.asyncExample);
    app.get('/v1/someapi/promise', routes.promiseExample);
    app.post('/v1/someapi/example', routes.asyncExample);
  },
};
