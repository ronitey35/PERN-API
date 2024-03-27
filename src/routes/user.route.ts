import { Router } from 'express';
import { registerUser } from '@/controllers/user.controller';

const router = Router();

export const userRoute = router;
router.post('/register', registerUser);
