const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger');
//app.get('/',(req, res) => {
//    //res.send('hello world!');
//    res.sendFile(path.join(__dirname,'public','Index.html'));
//});

//init middleware
app.use(logger)

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//api
app.get('/api/getMembers',(req, res) => res.json(members));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



