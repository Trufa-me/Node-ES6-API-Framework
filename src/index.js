import config from 'config';
import routes from './service/routes';
import server from './service/server';

const app = server.create();
const { host, port } = config.get('server');

routes.register(app);

app.listen(port, () => {
  console.log(`✅ 😀 - Front-End server is running at http://${host}:${port}`);
  console.log(`Try me: http://${host}:${port}/v1/someapi/promise`);
});
