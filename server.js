const express = require("express");
const mongoose = require("mongoose");
const todos = require("./routes/todos");
const PORT = process.env.PORT || 3000;
const path = require("path");
const db = require("./config/keys").mongo_URI;
const bodyParser = require("body-parser");
const publicPath = path.join(__dirname, "./public");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MLab");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/todos", todos);

app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
