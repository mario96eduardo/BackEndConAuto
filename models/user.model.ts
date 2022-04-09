import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('users', {
	dni: {
		type: DataTypes.INTEGER
	},
	userName: {
		type: DataTypes.STRING
	},
	name: {
		type: DataTypes.STRING
	},
	lasname: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING
	},
	rol: {
		type: DataTypes.INTEGER
	},
	password: {
		type: DataTypes.STRING
	},
	status: {
		type: DataTypes.INTEGER
	}
});

export default User;
