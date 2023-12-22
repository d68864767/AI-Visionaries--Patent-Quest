```javascript
// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const dbConfig = require('../config/database');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Database connection
const mongoose = require('mongoose');
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Routes setup
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
