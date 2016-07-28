import config from './config/';
import routes from './service/routes';
import server from './service/server';

const app = server.create();
const { host, port } = config.server;

routes.register(app);

app.listen(port, () => {
    console.log(`Front-End server is running at ${host}:${port}`);
});


