const bcrypt = require('bcryptjs');
const pool = require('../database');

const registerUser = async (req, res) => {
    //registration logic
    const { username, email, password } = req.body;

    //validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields'});
    }

    try {
        // Check for existing user
        const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (user.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        // Respond with success
        res.status(201).json({ message: 'User registered successfully', userId: result[0].insertId });
    } catch (err) {
        // Handle any errors
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerUser
};