"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Info = connection_1.default.define('informationusers', {
    idUser: {
        type: sequelize_1.DataTypes.INTEGER
    },
    datesOfBirth: {
        type: sequelize_1.DataTypes.DATE
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    vaccinationStatus: {
        type: sequelize_1.DataTypes.STRING
    },
    vaccinationType: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Info;
//# sourceMappingURL=information_user.model.js.map