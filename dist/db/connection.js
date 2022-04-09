"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('conauto', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
    //logging:false
});
exports.default = db;
//# sourceMappingURL=connection.js.map