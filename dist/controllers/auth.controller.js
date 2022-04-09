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
exports.insertInforUser = exports.login = void 0;
const generate_jwt_1 = require("./../helpers/generate-jwt");
const password_1 = require("../helpers/password");
const information_user_model_1 = __importDefault(require("../models/information_user.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userDB = yield user_model_1.default.findOne({
            where: {
                email,
                status: 1
            }
        });
        if (!userDB) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        const matchOfPassword = (0, password_1.ValidadPassword)(password, userDB.get().password);
        if (!matchOfPassword) {
            return res.status(401).json({ msg: 'Usuario y contraseña incorrecta' });
        }
        delete userDB.get().password;
        const token = yield (0, generate_jwt_1.generateJWTObject)(userDB.get());
        res.json({ token });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.login = login;
const insertInforUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    const { body } = req;
    try {
        const infoUserDB = yield information_user_model_1.default.findOne({
            where: {
                idUser
            }
        });
        body.idUser = idUser;
        if (infoUserDB) {
            const updateinfoUser = yield infoUserDB.update(body);
            return res.json(updateinfoUser.get());
        }
        const infoUser = yield information_user_model_1.default.create(body);
        res.json(infoUser.get());
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.insertInforUser = insertInforUser;
//# sourceMappingURL=auth.controller.js.map