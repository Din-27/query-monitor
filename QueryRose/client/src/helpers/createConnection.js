import fs from 'fs'
import path from 'path'

const __dirname = new URL('.', import.meta.url).pathname;

const createConnectionMysql = ({ host, user, dbName }) => {
    const filename = Date.now() + '_connection.js'
    const pathConnectionDir = path.join(__dirname, '/connections')
    const pathConnectionFile = path.join(__dirname, '/connections')
    if (!fs.existSync(pathConnectionDir)) {
        fs.mkdirSync(pathConnectionDir)
    }
    fs.writeFileSync(pathConnectionFile + '/' + filename,
        `const connection = await mysql.createConnection({
            host: '${host}',
            user: '${user}',
            database: '${dbName}',
        });`
    )
    return filename
}

export default createConnectionMysql