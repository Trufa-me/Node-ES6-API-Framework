import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('THIS MIDDLEWARE WILL ONLY APPLY TO THIS ROUTERS ROUTE V2');
  return next();
});

router.get('/something', (req, res) => res.status(200).send({ success: true }));

export default router;
