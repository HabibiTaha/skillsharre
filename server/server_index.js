const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

//basic route for testing server
app.get('/', (req, res) => {
    res.json({ message: 'SkillSwap server is running!'});
});

//Defining port
const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});