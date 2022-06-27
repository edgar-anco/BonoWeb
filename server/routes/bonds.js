import express from 'express';

import { getBonds, getBond, createBond, updateBond, deleteBond } from '../controllers/bonds.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getBonds);
router.get('/:id', getBond);
router.post('/', auth, createBond);
router.patch('/:id', auth, updateBond);
router.delete('/:id', auth, deleteBond);

export default router;