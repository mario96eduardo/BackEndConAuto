import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import Info from '../models/information_user.model';

export const getInforbyUserId = async (req: Request, res: Response) => {
	const { idUser } = req.params;

	try {
		const infoUserDB: Model<object, object> = (await Info.findOne({
			where: {
				idUser
			}
		})) as Model;

		res.json(infoUserDB.get());
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
