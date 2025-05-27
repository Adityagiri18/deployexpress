const express = require('express');
const path = require('path');
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Optional: Set views directory (default is './views')
app.set('views', path.join(__dirname, 'views'));

// Route
app.get('/', function (req, res) {
    res.render('index');  // Looks for 'views/index.ejs'
});

// Start server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
