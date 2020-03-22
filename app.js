var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var db = require("./db/connect");

var indexRouter = require("./routes");
var layersRouter = require("./routes/layers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(db());

app.use("/", indexRouter);
app.use("/layers", layersRouter);

module.exports = app;
