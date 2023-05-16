const express = require('express');
const app = express();
const port = 3000; // You can change this port number if needed
const path = require('path');

app.use(express.static('public'));

// Add this route handler after removing the existing one
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trial.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});