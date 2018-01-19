import express from 'express';
import v1Routes from './v1';
import v2Routes from './v2';

const router = express.Router();

router.use('/v1', v1Routes);
router.use('/v2', v2Routes);

export default router;
