import { TRequestFunction } from '@knittotextile/knitto-http';
import mysqlConnection from '@/libs/config/mysqlConnection';

const queryExecute: TRequestFunction = async (req) => {
	const { query } = req.body;
	const result = await mysqlConnection.raw<any[]>(query);

	return { result: result };
};

export default {
	queryExecute
};
