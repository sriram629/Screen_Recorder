const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello from server");
});
const DB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sriram:sri5728Q@cluster0.hctmnsr.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to the database...");
    } catch (err) {
        console.error("An error occurred while connecting to the database:", err); 
    }
};
DB();

app.listen(8000, () => {
    console.log("Server is running...");
});