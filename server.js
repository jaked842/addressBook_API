const http = require('http');
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const app = express();
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'address'
    }
});

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

const add = require('./controllers/add_controller');
const addresslist = require('./controllers/addresslist_controller');
const changeaddress = require('./controllers/changeaddress_controller');
const removeaddress = require('./controllers/removeaddress_controller');
const deleteall = require('./controllers/deleteall_controller');

app.post('/add', (req, res) => {add.addController(req,res, db)});
app.get('/addresslist', (req, res) => {addresslist.addresslistController(req, res, db)});
app.post('/changeaddress', (req, res) => {changeaddress.changeaddressController(req, res, db)});
app.delete('/removeaddress', (req, res) => {removeaddress.removeaddressController(req, res, db)});
app.delete('/deleteall', (req, res) => {deleteall.deleteallController(req, res, db)});
