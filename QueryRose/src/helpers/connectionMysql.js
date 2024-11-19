const fs = require('fs')
const path = require('path')

const createFileConnectionMysql = (connectionsProps) => {
    const pathFile = path.join(__dirname.replace('\\helpers', ''), `/connections/${connectionsProps.name}.js`)
    const pathFileJson = path.join(__dirname.replace('\\helpers', ''), `/connections/${connectionsProps.name}.json`)
    const templateCode = `
    const mysql = require('mysql2/promise');
    const connectionJson = require('./${connectionsProps.name}.json');

    const pool = mysql.createPool(connectionJson);
    
    module.exports = pool`

    fs.writeFile(pathFileJson, JSON.stringify(connectionsProps.mysqlConfig), (err) => {
        if (err) {
            console.error(err);
            throw new Error('Gagal membuat Koneksi')
        }
    })

    fs.writeFile(pathFile, templateCode, (err) => {
        if (err) {
            console.error(err);
            throw new Error('Gagal membuat Koneksi')
        }
    })
}

const getCurrentConnectionMysql = (name) => {
    const pathConnectionDir = path.join(__dirname, `/connections/${name}.js`)
    if (fs.existsSync(pathConnectionDir)) {
        throw new Error('Koneksi tidak ditemukan')
    }
    const pool = require(`../connections/${name}`)
    const dataJson = require(`../connections/${name}.json`)
    return { pool, dataJson: dataJson }
}

module.exports = { createFileConnectionMysql, getCurrentConnectionMysql }