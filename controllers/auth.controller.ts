import { generatePassword } from './../helpers/password';
import { generateJWTObject } from './../helpers/generate-jwt';
import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { ValidadPassword } from '../helpers/password';
import Info from '../models/information_user.model';
import User from '../models/user.model';

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	try {
		const userDB = await User.findOne({
			where: {
				email,
				status: 1
			}
		});
		if (!userDB) {
			return res.status(404).json({ msg: 'Usuario no encontrado' });
		} 
		const matchOfPassword = ValidadPassword( password,userDB.get().password);

		if (!matchOfPassword) {
			return res.status(401).json({ msg: 'Usuario y contraseña incorrecta' });
		}
		
		delete userDB.get().password;
		const token = await generateJWTObject(userDB.get());
		res.json({token});
	} catch (error) {
		res.status(404).json(error);
	}
};

export const insertInforUser = async (req: Request, res: Response) => {
	const { idUser } = req.params;
	const { body } = req;
	try {
		const infoUserDB = await Info.findOne({
			where: {
				idUser
			}
		});
		body.idUser = idUser;
		if (infoUserDB) {
			const updateinfoUser = await infoUserDB.update(body);
			return res.json(updateinfoUser.get());
		}
		const infoUser = await Info.create(body);

		res.json(infoUser.get());
	} catch (error) {
		res.status(404).json(error);
	}
};
