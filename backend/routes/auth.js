const express = require('express');

const User = require('../models/Users');

const router = express.Router();

const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const JWT_SECRET = "sarthakisdeveloper";

// Create a user using : POST "/api/auth/createuser" . No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    // check whether the user with this email exits already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry a user with this email already exits' });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });


    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

// Authenticate a user using : POST "/api/auth/createuser" . No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'Please enter correct credentials' });
        }

        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            return res.status(400).json({ error: 'Please enter correct credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;