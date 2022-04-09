import { insertInforUser, getInforbyUserId } from './../controllers/information_user.controller';
import { Router } from "express";
import { test } from "../controllers/users.controller";
const router = Router();
router.get("/getInformationByUserId/:idUser", getInforbyUserId);
router.post("/postInformationByUserId/:idUser", insertInforUser);
export default router;