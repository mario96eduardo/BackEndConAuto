import { generatePassword } from './../helpers/password';
import { generateJWTObject } from './../helpers/generate-jwt';
import { Request, Response } from 'express';
import User from '../models/user.model';
import Info from '../models/information_user.model';

export const test = async (req: Request, res: Response) => {
	res.status(500).json(true);
};
export const getAllUser = async (req: Request, res: Response) => {
	try {
		User.hasOne(Info, { foreignKey: 'idUser' });
		const useDB = await User.findAll	({
			where: {
				status: 1
			},include: {
				model: Info,
			}
		});
		if (useDB) {
			return res.json(useDB);
		}
		res.json([]);
	} catch (error) {
		res.status(404).json(error);
	}
};
export const getAllUserWithFilter = async (req: Request, res: Response) => {
	try {
		const { vaccinationType } = req.params;
		User.hasOne(Info, { foreignKey: 'idUser' });
		const useDB:any = await User.findAll({
			where: {
				status: 1
			},
			include: {
				model: Info,
				where: {
					vaccinationType
				}
			}
		});
	
		res.json(useDB);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const registerUser = async (req: Request, res: Response) => {
	const { body } = req;
	try {
		const useDB = await User.findOne({
			where: {
				email: body.email,
				status: 1
			}
		});
		if (useDB) {
			return res.status(400).json('El usuario ya existe');
		}
		body.status=1;
		body.password = await generatePassword(body.password);
		const newUser = await User.create(body);
		delete body.password;
		res.json({ newUser });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const useDB = await User.findOne({
			where: {
				id,
				status: 1
			}
		});
		if (!useDB) {
			return res.status(404).json('El usuario no existe');
		}
		if (body.password) {
			body.password = await generatePassword(body.password);
		}
		const updateUser = await User.create(body);
		delete body.password;
		res.json(updateUser.get());
	} catch (error) {
		res.status(404).json(error);
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const useDB = await User.findOne({
			where: {
				id,
				status: 1
			}
		});
		if (!useDB) {
			return res.status(404).json('El usuario no existe');
		}
		const updateUser = await useDB.update({ status: 0 });
		delete body.password;
		res.json(updateUser.get());
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};
