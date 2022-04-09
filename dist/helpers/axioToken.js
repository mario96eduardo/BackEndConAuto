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
exports.axioPostOnSignal = exports.getDataEndpoint = exports.axioGetToken2 = exports.axioGetToken = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const axioGetToken = (username = process.env.USERFV + '', password = process.env.PASSWORDFV + '', url = process.env.URLAUTH, method = 'POST', headers = {}) => {
    return new Promise((resolve, reject) => {
        const data = qs_1.default.stringify({
            'grant_type': 'password',
            'username': username,
            'password': password,
            'client_secret': process.env.CLIENTSECRET,
            'client_id': process.env.CLIENTID
        });
        const config = {
            method,
            url,
            headers,
            data
        };
        (0, axios_1.default)(config)
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
exports.axioGetToken = axioGetToken;
const axioGetToken2 = (url = process.env.URLAUTH, method = 'POST', headers = {}, responseType = 'stream') => {
    return new Promise((resolve, reject) => {
        const config = {
            method,
            url,
            headers,
            responseType
        };
        (0, axios_1.default)(config)
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
exports.axioGetToken2 = axioGetToken2;
const getDataEndpoint = (url, token) => {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        const value = yield (0, exports.axioGetToken)('', '', `${url}`, 'GET', { 'Authorization': `Bearer ${token}` });
        resolve(value);
    }));
};
exports.getDataEndpoint = getDataEndpoint;
const axioPostOnSignal = (url = process.env.URL_ONESIGNAL, method = 'POST', headers = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        const config = {
            method,
            url,
            headers,
            data,
            //   responseType
        };
        (0, axios_1.default)(config)
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
exports.axioPostOnSignal = axioPostOnSignal;
//# sourceMappingURL=axioToken.js.map