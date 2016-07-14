import config from './config/';
import routes from './service/routes';
import server from './service/server';

const app = server.create();
const { host, port } = config.server;

routes.register(app);

const servers = app.listen(config.server.port, () => {
	const { address: host, port } = servers.address();
	console.log(`Front-End server is running at ${host}:${port}`);
});


