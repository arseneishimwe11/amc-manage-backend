import express, { RequestHandler } from 'express';
import { getAmcList, getAmcDetail, createAmc, updateAmc } from '../../controllers/amcController';
import { auth } from '../../middleware/auth';
import { validateAmcCreate, validateAmcUpdate } from '../../middleware/validator';

const router = express.Router();

router.use(auth);

router.get('/', getAmcList as RequestHandler);
router.get('/:id', getAmcDetail as RequestHandler);
router.post('/', validateAmcCreate as RequestHandler[], createAmc as RequestHandler);
router.put('/:id', validateAmcUpdate as RequestHandler[], updateAmc as RequestHandler);

export default router;
