const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT || 3601;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});