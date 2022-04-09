import { Sequelize } from 'sequelize';
const db = new Sequelize('conauto', 'root', '', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql'
	//logging:false
});
export default db;
