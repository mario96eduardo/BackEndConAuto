"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)('email', 'El email es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
], auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map