const express = require('express');
const members = require('./member');
const db = require('../../models/connection');
const router = express.Router();
/*router.get('/',(req,res)=>{
    res.json(members)
})*/
// const connect = db.connect((err) => {
//     if (err)
//         console.log('Something Goes Wrong');
//     else
//         console.log('Database Connection Connected Successfully');
// })

router.get('/alluser', (req, res) => {
    let sql = 'SELECT * FROM USERS';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })
})
router.get('/:id', (req, res) => {

    let sql = `SELECT * FROM USERS where id=${req.param.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })
})
router.post('/insertuser', (req, res) => {
    const { name, email, phone } = req.body;
    const user = { name: name, email: email, phone: phone };
    console.log(user + "------" + req.body);
    /*let sql = 'INSERT INTO USERS(name,email,phone) values(?)'
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })*/
})
router.put('/updateuser', (req, res) => {
    const { name, email, phone, id } = req.body;
    const user = { name: name, email: email, phone: phone, id: id };
    let sql = 'UPDATE USERS SET NAME=?,EMAIL=?,PHONE=? where ID=?'
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })
})
router.delete('/deleteuser', (req, res) => {
    const id = req.body.id;
    let sql = 'DELETE from users where id=?';
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })
})
router.patch('updateemail', (req, res) => {
    const { email, id } = req.body;
    const user = { email: email, id: id };
    let sql = 'update from users set email=? where id=?'
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
    const close = db.end((err) => {
        if (err)
            console.log('Unable To Close The Connection');
        else
            console.log('Database Connection Closed Successfully');
    })
})
module.exports = router;