const { getCurrentConnectionMysql } = require("../helpers/connectionMysql");

exports.getDatabases = async (req, res) => {
    try {
        const { pool: mysqlConnection, dataJson: json } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query("SHOW DATABASES;");

        return res.status(200).send({
            result: list[0]
                .filter(
                    (x) =>
                        json.database
                            ? x.Database === json.database
                            : (
                                x.Database !== "information_schema" &&
                                x.Database !== "performance_schema" &&
                                x.Database !== "phpmyadmin" &&
                                x.Database !== "mysql"
                            )

                )
                .map((x) => {
                    x.name = x.Database;
                    delete x.Database;
                    return x;
                }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.getTables = async (req, res) => {
    try {
        const { dbName } = req.params;
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(
            `SHOW TABLES FROM ${dbName};`
        );
        return res.status(200).send({
            result: list[0].map((x) => {
                x.name = x[`Tables_in_${dbName}`];
                delete x[`Tables_in_${dbName}`];
                return x;
            }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.getViews = async (req, res) => {
    try {
        const { dbName } = req.params;
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(
            `SHOW FULL TABLES IN ${dbName} WHERE TABLE_TYPE LIKE 'VIEW';`
        );
        return res.status(200).send({
            result: list[0].map((x) => {
                x.name = x[`Tables_in_${dbName}`];
                delete x[`Tables_in_${dbName}`];
                return x;
            }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.getStoredProcedure = async (req, res) => {
    try {
        const { dbName } = req.params;
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(
            'SHOW PROCEDURE STATUS WHERE db = ?;',
            [dbName]
        );
        return res.status(200).send({
            result: list[0].map((x) => {
                x.name = x.Name;
                delete x.Name;
                return x;
            }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.getTriggers = async (req, res) => {
    try {
        const { dbName } = req.params;
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(
            `SHOW TRIGGERS FROM ${dbName};`
        );
        return res.status(200).send({
            result: list[0].map((x) => {
                x.name = x.Trigger;
                delete x.Trigger;
                return x;
            }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};

exports.getEvents = async (req, res) => {
    try {
        const { dbName } = req.params;
        const { pool: mysqlConnection } = getCurrentConnectionMysql("testing");
        const list = await mysqlConnection.query(
            `SHOW EVENTS FROM ${dbName};`,
        );
        return res.status(200).send({
            result: list[0].map((x) => {
                x.name = x.Name;
                delete x.Name;
                return x;
            }),
        });
    } catch (error) {
        console.error(error);
        throw new Error("Server Error \n", error);
    }
};
