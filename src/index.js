import config from 'config';
import routes from './service/routes';
import server from './service/server';

const app = server.create();
const { host, port } = config.get('server');

routes.register(app);
console.log(app._router.stack);

app.listen(port, () => {
  console.log(`✅ 😀 - Front-End server is running at http://${host}:${port}`);
  console.log(
    `Try me: http://${host}:${port}/api/v1/something or http://${host}:${port}/api/v2/something`,
  );
});
