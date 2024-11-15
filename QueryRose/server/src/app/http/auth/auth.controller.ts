import mysqlConnection from '@/libs/config/mysqlConnection';
import { TRequestFunction } from '@knittotextile/knitto-http';
import { InvalidParameterException } from '@knittotextile/knitto-core-backend/dist/CoreException';
import { TLoginValidation } from './auth.request';
import jwt from 'jsonwebtoken';
import { APP_SECRET_KEY } from '@/libs/config';

const login: TRequestFunction = async (req) => {
	const { username, password } = req.body as TLoginValidation;
	const [user] = await mysqlConnection.raw<Entity.IUser[]>(
		'SELECT * FROM user WHERE username =  ? and password = md5(?) LIMIT 1',
		[username, password]
	);

	if (!user) {
		throw new InvalidParameterException('Username atau password salah');
	}

	const token = jwt.sign(
		{ id_user: user.id_user, nama: user.nama, username: user.username },
		APP_SECRET_KEY,
		{ expiresIn: '7d' }
	);

	return {
		result: {
			user: {
				id_user: user.id_user,
				nama: user.nama,
				username: user.username,
				input: user.level === 'IMPLEMENTOR' ? 'enable' : 'disable'
			},
			token
		}
	};
};

const logout: TRequestFunction = async (req) => {
	await mysqlConnection.raw('UPDATE user SET status_login=\'FREE\',ip_addres=\'\' WHERE id_user=?', [req.userId]);

	await mysqlConnection.raw('UPDATE data_printer SET id_karyawan=0 WHERE id_karyawan=?', [req.userId]);

	return {};
};


export default {
	login,
	logout
};
