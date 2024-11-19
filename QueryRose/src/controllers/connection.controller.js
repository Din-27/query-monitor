const { createFileConnectionMysql } = require("../helpers/connectionMysql")

exports.createConnection = (req, res) => {
    try {
        createFileConnectionMysql({
            name: 'testing',
            mysqlConfig: {
                // host: 'localhost',
                // user: 'root',
                // database: 'tear',
                host: "192.168.20.25",
                port: 31002,
                user: "mysql-holis",
                password: "@dmin35Bdg",
                database: "muliaabadi_baru",
            }
        })
        return res.status(200).send({
            message: 'sukses membuat koneksi'
        })
    } catch (error) {
        console.error(error)
        throw new Error('Server Error \n', error)
    }
}
