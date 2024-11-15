import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getStoredProcedure: TRequestFunction = async (req) => {
	const result = [];
	const { dbName } = req.params;
	const storedProcedures = await mysqlConnection.raw<any[]>(
		'SHOW PROCEDURE STATUS WHERE db = ?;',
		[dbName]
	);

	for (const item of storedProcedures) {
		result.push({
			name: item.Name
		});
	}

	return { result: result };
};

export default {
	getStoredProcedure
};
