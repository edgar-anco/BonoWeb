import express from 'express';

import { getBonds, createBond, updateBond } from '../controllers/bonds.js';

const router = express.Router();

router.get('/', getBonds);
router.post('/', createBond);
router.patch('/:id', updateBond);

export default router;