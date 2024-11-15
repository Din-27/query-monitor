import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getDatabases: TRequestFunction = async (req) => {
	const result = [];
	const databases = await mysqlConnection.raw<any[]>('SHOW DATABASES;');


	for (const item of databases) {
		result.push({
			name: item.Database
		});
	}

	return { result: result };
};

export default {
	getDatabases
};
