"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const information_user_controller_1 = require("./../controllers/information_user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/getInformationByUserId/:idUser", information_user_controller_1.getInforbyUserId);
router.post("/postInformationByUserId/:idUser", information_user_controller_1.insertInforUser);
exports.default = router;
//# sourceMappingURL=information_user.routes.js.map