// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  console.log(res.status, status)
  return res.status(status).send({
    status,
    error: err.message || 'Something failed!',
  });
};

const invalidEndpoint = (req, res, next) => {
  const error = new Error(
    'Ooops... It looks like this query or endpoint is incorrect/invalid',
  );
  error.status = 404;
  return next(error);
};

export { errorHandler, invalidEndpoint };
