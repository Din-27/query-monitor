import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getEvents: TRequestFunction = async (req) => {
	const { dbName } = req.params;
	const result = [];
	const events = await mysqlConnection.raw<any[]>(
		`SHOW EVENTS FROM ${dbName};`,
		[dbName]
	);

	for (const item of events) {
		result.push({
			name: item.Name
		});
	}

	return { result: result };
};

export default {
	getEvents
};
