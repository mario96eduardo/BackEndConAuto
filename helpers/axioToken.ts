import axios, { AxiosRequestConfig, Method, ResponseType } from 'axios';
import qs from 'qs';

export const axioGetToken = (
    username: string = process.env.USERFV + '',
    password: string = process.env.PASSWORDFV + '',
    url = process.env.URLAUTH,
    method: Method = 'POST',
    headers = {}
) => {
    return new Promise((resolve, reject) => {
        const data = qs.stringify({
            'grant_type': 'password',
            'username': username,
            'password': password,
            'client_secret': process.env.CLIENTSECRET,
            'client_id': process.env.CLIENTID
        });
        const config: AxiosRequestConfig = {
            method,
            url,
            headers,
            data
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            });
    })

}

export const axioGetToken2 = (
    url = process.env.URLAUTH,
    method: Method = 'POST',
    headers = {},
    responseType: ResponseType = 'stream', // important
) => {
    return new Promise((resolve, reject) => {

        const config: AxiosRequestConfig = {
            method,
            url,
            headers,
            responseType
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            });
    })

}
export const getDataEndpoint = (url: string, token: string) => {
    return new Promise(async (resolve) => {
        const value = await axioGetToken(
            '',
            '',
            `${url}`,
            'GET',
            { 'Authorization': `Bearer ${token}` });
        resolve(value);
    })

}


export const axioPostOnSignal = (
    url = process.env.URL_ONESIGNAL,
    method: Method = 'POST',
    headers = {},
    data = {},
//    responseType: ResponseType = 'stream', // important
) => {
    return new Promise((resolve, reject) => {

        const config: AxiosRequestConfig = {
            method,
            url,    
            headers,
            data,
         //   responseType
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            });
    })

}