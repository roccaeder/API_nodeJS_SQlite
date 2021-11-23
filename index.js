const express = require('express');
const sequelize = require('./database');
const Car = require('./Cars');

const app = express();

sequelize.sync({ force: true }).then(() => console.log('start db'))

app.post('/cars', (req, res) => {
    Car.create(req.body).then(()=>{
      res.send({success: "Car created"});
    })
})

app.listen(3001, ()=> {
    console.log('Server is running on port 3001');
})