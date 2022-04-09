import { Buffer } from 'buffer';
import fs from 'fs';
import path from 'path';
import { v4 as uudiv4 } from 'uuid';
export const uploadFile = (
  files: any /*  extencionesvalida = ['png', 'jpg', 'jpeg', 'gif'] */,
  carpeta = ''
) => {
  //console.log('req.files >>>', req.files); // eslint-disable-line
  return new Promise((resolve, reject) => {
    const { file } = files;
    const nombreCortado = file.name.split('.');
    const extension = nombreCortado[nombreCortado.length - 1];
    //validar la extencion
    /*       if (!extencionesvalida.includes(extension)) {
                  return reject(`no include this extention ${extencionesvalida}`)
      
              } */
    const nombreTemp = uudiv4() + '.' + extension;
    const uploadPath = path.join(
      __dirname,
      '../public/uploads/',
      carpeta,
      nombreTemp
    );

    file.mv(uploadPath, (err: any) => {
      if (err) {
        return reject(err);
      }
      resolve(nombreTemp);
    });
  });
};

export const saveFileTypeBase64 = (
  imagen: any,
  folder: string,
  nameFile: string
) => { 
  let buff =Buffer.alloc(imagen.length,imagen, 'base64');

  const uploadPath = path.join(
    __dirname,
    '../public/uploads/',
    folder,
    `${nameFile}`
  );

  fs.writeFileSync(uploadPath, buff);

  const userImgUrl = `${process.env.HOSTNAME}/uploads/colaboratorimg/${nameFile}`;
  return userImgUrl;
};
