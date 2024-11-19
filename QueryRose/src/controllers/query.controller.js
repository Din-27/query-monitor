const { getCurrentConnectionMysql } = require("../helpers/connectionMysql");

exports.queryExecute = async (req, res) => {
    try {
        let { query } = req.body;
        // console.log(query);

        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(query);

        return res.status(200).send({
            result: list[0],
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.clickTable = async (req, res) => {
    try {
        let { tableName, limit = true } = req.body;
        let query = `select * from ${tableName}`
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        if (limit) query += ' LIMIT 1000'

        const list = await mysqlConnection.query(query);

        return res.status(200).send({
            result: list[0],
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.clickView = async (req, res) => {
    try {
        let { viewName, limit = true } = req.body;
        let query = `select * from ${viewName}`
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        if (limit) query += ' LIMIT 1000'

        const list = await mysqlConnection.query(query);

        return res.status(200).send({
            result: list[0],
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};
