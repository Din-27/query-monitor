import { DBAdapter } from '@knittotextile/knitto-mysql/dist/types/DBAdapter';
import mysqlConnection from '@/libs/config/mysqlConnection';

class BaseRepository {
	protected dbConnector: DBAdapter.IDBAdapter;

	constructor(conn?: DBAdapter.IDBAdapter) {
		this.dbConnector = conn ? conn : mysqlConnection;
	}

	async raw<T>(query: unknown, values?: any[]): Promise<T> {
		const exec = await this.dbConnector.raw<T>(query, values);

		return exec;
	}

	async transaction<T>(
		callback: (connection: DBAdapter.IDBAdapter) => Promise<T>
	) {
		const exec = await mysqlConnection.transaction<T>(callback);

		return exec;
	}

	/**
	 * Jika set connection menggunakan koneksi dari transaksi setelah repo selesai digunakan
	 * paggil method resetConnection()
	 */
	async setConnection(conn: DBAdapter.IDBAdapter) {
		this.dbConnector = conn;
	}

	async resetConnection() {
		this.dbConnector = mysqlConnection;
	}

	/**
	 *
	 * Method ini dapat digunakan jika ingin me-manage koneksi dari pool secara manual,
	 * sebagai catatan, pastikan koneksi di release ataupun di destroy setelah pemakaian
	 *
	 */
	static async manualRaw<T>(callback: (connection: any) => Promise<T>) {
		// TOOD: missing type for connection
		const conn = await mysqlConnection.poolConnection.getConnection();
		const exec = (await callback(conn)) as T;

		return exec;
	}

	/**
	 *
	 * Method ini berfungsi untuk memparsing arguments string menjadi query column_name
	 */
	protected parsingSelectArgs(selectArgs: string[]) {
		let selectedFields = '*';

		if (selectArgs && selectArgs.length > 0) {
			selectedFields = selectArgs.join(', ');
		}

		return selectedFields;
	}
}

export default BaseRepository;
