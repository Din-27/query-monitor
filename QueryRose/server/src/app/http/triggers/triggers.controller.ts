import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getTriggers: TRequestFunction = async (req) => {
	const result = [];
	const { dbName } = req.params;

	const triggers = await mysqlConnection.raw<any[]>(
		`SHOW TRIGGERS FROM ${dbName};`
	);

	for (const item of triggers) {
		result.push({
			name: item.Trigger
		});
	}

	return { result: result };
};

export default {
	getTriggers
};
