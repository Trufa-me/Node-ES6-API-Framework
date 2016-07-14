import routes from '../routes/example';

export default {

    register(app) {
        app.get('/v1/someapi/example', routes.example);
        app.post('/v1/someapi/example', routes.example);
    },

};
