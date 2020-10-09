const mongoose = require('mongoose');

const URI = "mongodb+srv://super_man:123@cluster0.ijsgh.mongodb.net/user_db?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI), { useUnifiedTopology: true, useNewUrlParser: true };
    console.log('db has been connected..!');
}

module.exports = connectDB;