"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJWT = exports.generateJWTObject = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const generateJWT = (email) => {
    return new Promise((resolve, reject) => {
        const payload = {
            email
        };
        jsonwebtoken_1.default.sign(payload, `${process.env.SECRETORPRIVATEKEY}`, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puedo genera el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
const generateJWTObject = (user) => {
    return new Promise((resolve, reject) => {
        const payload = {
            user
        };
        jsonwebtoken_1.default.sign(payload, `${process.env.SECRETORPRIVATEKEY}`, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puedo genera el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWTObject = generateJWTObject;
const decodeJWT = (payload) => {
    return new Promise((resolve) => {
        const data = (0, jsonwebtoken_1.decode)(payload);
        resolve(data);
    });
};
exports.decodeJWT = decodeJWT;
//# sourceMappingURL=generate-jwt.js.map