const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
require("dotenv").config();
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

// start middleware

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

// view engine setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// these handle data formatting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// calls the index in the controllers folder
app.use(routes);

// end middleware
