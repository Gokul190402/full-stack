const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { username, email, mobile, password } = req.body;
    console.log('Received data:', req.body); 

    try {
        const newUser = new User({ username, email, mobile, password });
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received data:', req.body);

    try {
        const srhUser = await User.findOne({ username });

        if (!srhUser) {
            return res.status(404).send('User not found');
        }

        if (srhUser.password !== password) { 
            return res.status(401).send('Invalid password');
        }

        console.log('User found:', srhUser);
        res.send('Login successful');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
