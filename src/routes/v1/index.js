import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('THIS MIDDLEWARE WILL ONLY APPLY TO THIS ROUTERS ROUTE V1');
  return next();
});

router.get('/something', (req, res, next) => {
  const error = new Error('An error occurred');
  return next(error);
});

export default router;
