"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reports_controller_1 = require("../controllers/reports.controller");
const router = (0, express_1.Router)();
router.get("/", reports_controller_1.reportGet);
exports.default = router;
//# sourceMappingURL=resport.routes.js.map