"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.registerUser = exports.getAllUserWithFilter = exports.getAllUser = exports.test = void 0;
const password_1 = require("./../helpers/password");
const user_model_1 = __importDefault(require("../models/user.model"));
const information_user_model_1 = __importDefault(require("../models/information_user.model"));
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(500).json(true);
});
exports.test = test;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user_model_1.default.hasOne(information_user_model_1.default, { foreignKey: 'idUser' });
        const useDB = yield user_model_1.default.findAll({
            where: {
                status: 1
            }, include: {
                model: information_user_model_1.default,
            }
        });
        if (useDB) {
            return res.json(useDB);
        }
        res.json([]);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getAllUser = getAllUser;
const getAllUserWithFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vaccinationType } = req.params;
        user_model_1.default.hasOne(information_user_model_1.default, { foreignKey: 'idUser' });
        const useDB = yield user_model_1.default.findAll({
            where: {
                status: 1
            },
            include: {
                model: information_user_model_1.default,
                where: {
                    vaccinationType
                }
            }
        });
        res.json(useDB);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getAllUserWithFilter = getAllUserWithFilter;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const useDB = yield user_model_1.default.findOne({
            where: {
                email: body.email,
                status: 1
            }
        });
        if (useDB) {
            return res.status(400).json('El usuario ya existe');
        }
        body.status = 1;
        body.password = yield (0, password_1.generatePassword)(body.password);
        const newUser = yield user_model_1.default.create(body);
        delete body.password;
        res.json({ newUser });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.registerUser = registerUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const useDB = yield user_model_1.default.findOne({
            where: {
                id,
                status: 1
            }
        });
        if (!useDB) {
            return res.status(404).json('El usuario no existe');
        }
        if (body.password) {
            body.password = yield (0, password_1.generatePassword)(body.password);
        }
        const updateUser = yield user_model_1.default.create(body);
        delete body.password;
        res.json(updateUser.get());
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const useDB = yield user_model_1.default.findOne({
            where: {
                id,
                status: 1
            }
        });
        if (!useDB) {
            return res.status(404).json('El usuario no existe');
        }
        const updateUser = yield useDB.update({ status: 0 });
        delete body.password;
        res.json(updateUser.get());
    }
    catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map