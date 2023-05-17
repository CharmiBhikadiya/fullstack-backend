const express = require("express");
const mongoose = require("mongoose");
const ProjectRoutes = require("./src/routes/projects");

const app = express();
require('dotenv').config()

app.use(express.json());
app.use("/projects", ProjectRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://charmibhikadia:Charmi123@cluster0.9zngpqp.mongodb.net/?retryWrites=true&w=majority')
        app.listen(process.env.PORT)
    } catch (error) {
        console.log('error', error)
    }
}

connectDB();