const mysql = require('mysql')
//配置数据库信息
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'lk_pdd'
});
//连接数据库
connection.connect();

module.exports = connection;