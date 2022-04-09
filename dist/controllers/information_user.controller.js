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
exports.insertInforUser = exports.getInforbyUserId = void 0;
const information_user_model_1 = __importDefault(require("../models/information_user.model"));
const getInforbyUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    try {
        const infoUserDB = (yield information_user_model_1.default.findOne({
            where: {
                idUser
            }
        }));
        res.json(infoUserDB.get());
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getInforbyUserId = getInforbyUserId;
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
//# sourceMappingURL=information_user.controller.js.map