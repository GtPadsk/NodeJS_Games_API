import express from 'express';

import { SIGN_UP } from '../controller/user.js';
import { LOGIN } from '../controller/user.js';

const router = express.Router();

router.post("/sign_up", SIGN_UP);
router.post("/login", LOGIN);

export default router;