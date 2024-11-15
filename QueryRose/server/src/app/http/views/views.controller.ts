import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const getViews: TRequestFunction = async (req) => {
	const result = [];
	const { dbName } = req.params;
	const views = await mysqlConnection.raw<any[]>(
		`SHOW FULL TABLES IN ${dbName} WHERE TABLE_TYPE LIKE 'VIEW';`
	);

	for (const item of views) {
		result.push({
			name: item.Tables_in_muliaabadi_baru
		});
	}

	return { result: result };
};

export default {
	getViews
};
