const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
app.use(express.json({extended: false}));
app.use('/api/', require('./Api/User'));
const Port = process.env.Port || 8000;

if (process.env.Port === "production") {
    app.use(express.static('client/build'));
}

app.listen(Port, ()=>console.log("Server started"));

