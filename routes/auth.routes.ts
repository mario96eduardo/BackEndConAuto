import { login } from './../controllers/auth.controller';
import { check } from 'express-validator';
import { Router } from "express";
const router = Router();

router.post("/login",[
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
], login);
export default router;