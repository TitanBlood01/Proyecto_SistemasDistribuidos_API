const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(morgan('dev'));
app.use(require('./controllers/auth_controller'));
app.use(require('./routes/parqueos_route'));

module.exports = {app};