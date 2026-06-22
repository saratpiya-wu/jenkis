const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// GET API Route
app.get('/api/food', (req, res) => {
    res.json({ 
        status: "Success",
        message: "Welcome to Food Express! Order online now." 
    });
});

app.listen(PORT, () => {
    console.log(`Food Express API running locally on port ${PORT}`);
});