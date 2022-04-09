import jwt, { decode } from 'jsonwebtoken';

export const generateJWT = (email: string) => {

    return new Promise((resolve, reject) => {
        const payload = {
            email
        }
        jwt.sign(payload, `${process.env.SECRETORPRIVATEKEY}`, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puedo genera el token')
            } else {
                resolve(token);
            }
        })


    })

}
export const generateJWTObject = (user: {}) => {

    return new Promise((resolve, reject) => {
        const payload = {
            user
        }
        jwt.sign(payload, `${process.env.SECRETORPRIVATEKEY}`, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puedo genera el token')
            } else {
                resolve(token);
            }
        })


    })

}

export const decodeJWT = (payload: string) => {
    return new Promise((resolve) => {
        const data = decode(payload);
        resolve(data);
    })

}