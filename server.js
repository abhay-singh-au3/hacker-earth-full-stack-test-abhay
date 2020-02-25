const express = require('express');
const app = express();
const port = process.env.port || 8000;
const memberRoute = require('./routes/memberRoute');

require('./db/config');
const insertData = require('./populateDB');

//populating DB
const path = './loan_part_0009b606f.csv';
insertData(path)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/member', memberRoute);

app.listen(port, () => console.log("Server running at port: ", port))