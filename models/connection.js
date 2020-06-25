const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'india@123',
    database: 'nodejs',
})
db.connect((err) => {
    if (err)
        console.log('Something Goes Wrong');
    else
        console.log('Database Connection Setup Successful');
})
module.exports = db