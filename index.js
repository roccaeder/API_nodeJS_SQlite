const express = require('express');
const sequelize = require('./database');
const Car = require('./Cars');

const app = express();

sequelize.sync({ force: true }).then(() => console.log('start db'))

app.use(express.json());

const carsData = [
    {
        "brand":"Toyota",
        "model": "Corolla",
        "year": 2020,
        "color": "red",
        "price": 9000
    }
];

app.post('/cars', (req, res) => {
    Car.create(req.body).then(()=>{
      res.send({success: "Car created"});
    })
})

app.get('/cars', (req, res) => {
    Car.findAll().then((data)=>{
        res.send(data);
    })
})

app.get('/cars/:id', async (req, res) => {
    const id = req.params.id;
    const car = await Car.findOne({where: {id: id}});
    res.send(car);
  })
  
  app.put('/cars/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const car = await Car.findOne({where: {id: id}});
    await car.update(body);
    await car.save();
    res.send(car);
  })
  
  app.delete('/cars/:id', async (req, res) => {
    const id = req.params.id;
    await Car.destroy({where: {id: id}});
    res.send({success: "Car deleted"});
  })

app.listen(3001, ()=> {
    console.log('Server is running on port 3001');
})