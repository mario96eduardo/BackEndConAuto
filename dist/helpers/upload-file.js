"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFileTypeBase64 = exports.uploadFile = void 0;
const buffer_1 = require("buffer");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const uploadFile = (files /*  extencionesvalida = ['png', 'jpg', 'jpeg', 'gif'] */, carpeta = '') => {
    //console.log('req.files >>>', req.files); // eslint-disable-line
    return new Promise((resolve, reject) => {
        const { file } = files;
        const nombreCortado = file.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        //validar la extencion
        /*       if (!extencionesvalida.includes(extension)) {
                      return reject(`no include this extention ${extencionesvalida}`)
          
                  } */
        const nombreTemp = (0, uuid_1.v4)() + '.' + extension;
        const uploadPath = path_1.default.join(__dirname, '../public/uploads/', carpeta, nombreTemp);
        file.mv(uploadPath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(nombreTemp);
        });
    });
};
exports.uploadFile = uploadFile;
const saveFileTypeBase64 = (imagen, folder, nameFile) => {
    let buff = buffer_1.Buffer.alloc(imagen.length, imagen, 'base64');
    const uploadPath = path_1.default.join(__dirname, '../public/uploads/', folder, `${nameFile}`);
    fs_1.default.writeFileSync(uploadPath, buff);
    const userImgUrl = `${process.env.HOSTNAME}/uploads/colaboratorimg/${nameFile}`;
    return userImgUrl;
};
exports.saveFileTypeBase64 = saveFileTypeBase64;
//# sourceMappingURL=upload-file.js.map