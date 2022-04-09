"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorField = void 0;
const express_validator_1 = require("express-validator");
const validatorField = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validatorField = validatorField;
//# sourceMappingURL=validator-field.middlewares.js.map