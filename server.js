const express = require('express');
const app = express();


const PORT = process.env.PORT || 3601;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});