import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getFunctions: TRequestFunction = async (req) => {
	const result = [];
	const { dbName } = req.params;
	const functions = await mysqlConnection.raw<any[]>(
		'SHOW FUNCTION STATUS WHERE db = ?;',
		[dbName]
	);

	for (const item of functions) {
		result.push({
			name: item.Name
		});
	}

	return { result: result };
};

export default {
	getFunctions
};
