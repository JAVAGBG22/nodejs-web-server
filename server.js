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
const postRoutes = require("./routes/post");

// app middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json({ limit: "5mb", type: "application/json" }));
app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes
app.use("/api", postRoutes);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on ${port}`));
