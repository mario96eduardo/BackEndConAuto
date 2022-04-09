"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("./../controllers/users.controller");
const validator_field_middlewares_1 = require("./../middlewares/validator-field.middlewares");
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_controller_2 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getAllUser);
router.get('/byFiltervaccine/:vaccinationType', users_controller_1.getAllUserWithFilter);
router.post('/register', [
    (0, express_validator_1.check)('dni', 'El dni es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('userName', 'El userName es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('name', 'El name es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('lasname', 'El lasname es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El email es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('rol', 'El rol es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email').isEmail(),
    validator_field_middlewares_1.validatorField
], users_controller_2.registerUser);
router.put('/update/:id', users_controller_1.updateUser);
router.delete('/delete/:id', users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map