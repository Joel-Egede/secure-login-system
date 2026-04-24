require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth');
const verifyToken = require('./middleware/auth');

const app = express();

app.use(express.json());

// ROUTES
app.use('/', authRoutes);

// HOME
app.get('/', (req, res) => {
    res.send('Server is running');
});

// PROTECTED ROUTE
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({
        message: "Welcome to dashboard",
        user: req.user
    });
});

// START SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});