const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

// welcome and goodbye routes
app.post('/api/welcome', async (req, res) => {
    try {
         res.status(200).json({
            success: true,
            message: `${req.body.name} welcome to the server!`,
        });
    } catch (error) {
        console.error('Payment status error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
app.post('/api/GoodBy', async (req, res) => {
    try {
         res.status(200).json({
            success: true,
            message: `${req.body.name} Goodbye from the server!`,
        });
    } catch (error) {
        console.error('Payment status error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
app.get('/', (req, res) => {
    res.send('server is working!');})

const PORT = process.env.PORT || 3601;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});