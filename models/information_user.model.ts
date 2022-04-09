import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Info = db.define('informationusers', {
	idUser: {
		type: DataTypes.INTEGER
	},
	datesOfBirth: {
		type: DataTypes.DATE
	},
	phone: {
		type: DataTypes.STRING
	},
	vaccinationStatus: {
		type: DataTypes.STRING
	},
	vaccinationType: {
		type: DataTypes.STRING
	}
});

export default Info;
