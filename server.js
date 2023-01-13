// importer
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// connecta to db
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// import routes

// app middlewares

// user routes

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on ${port}`));
