import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getTables: TRequestFunction = async (req) => {
	const result = [];
	const { dbName } = req.params;
	const tables = await mysqlConnection.raw<any[]>(
		`SHOW TABLES FROM ${dbName};`
	);
	for (const item of tables) {
		result.push({
			name: item.Tables_in_muliaabadi_baru
		});
	}

	return { result: result };
};

export default {
	getTables
};
