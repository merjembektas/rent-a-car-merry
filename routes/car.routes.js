const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.post('/add', async(req, res) => {
  try {
    const car = new Car( {
      name: 'Range Rover',
      image: 'https://www.motortrend.com/uploads/2021/11/2022-Land-Rover-Range-Rover-Velar-R-Dynamic_Static_001_140421.jpg?fit=around%7C875:492.1875',  
      capacity: 7,
      fuelType: 'gas',
      bookedTimeSlots: [{
          from: '1.1.2022',
          to: '6.1.2022',
        }],
      rentPerHour: '200EUR',
    });

    car.save();
    return res.status(200).json(car)
  } catch (e) {
    console.log('err', e)
  }
});

// getting all cars from db
router.get('/getallcars', async (req, res) => {
  try {
    const response = await Car.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});

router.get('/getcar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Car.findOne({ _id: id });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});

module.exports = router;
