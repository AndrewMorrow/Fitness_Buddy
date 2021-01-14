const express = require("express");
const routes = require("./controllers");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const logger = require("morgan");

// start middleware
const app = express();
app.use(logger("dev"));

// these handle data formatting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// calls the index in the controllers folder
app.use(routes);

// end middleware

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    (err) => {
        console.log("mongo connection", err);
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
