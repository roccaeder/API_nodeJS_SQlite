const express = require('express');
const sequelize = require('./database');

const app = express();

sequelize.sync({ force: true }).then(() => console.log('start db'))

app.listen(3001, ()=> {
    console.log('Server is running on port 3001');
})