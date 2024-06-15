const express = require('express');
const fs = require('fs');
const path = require('path');
const cors=require('cors')
 
const app = express();
app.use(cors());
const PORT = 3001;
 
// Route to handle GET request to '/'
app.get('/', (req, res) => {
    const dataPath = path.join(__dirname, './assets/data.json');
 
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the data file', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});
 
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});