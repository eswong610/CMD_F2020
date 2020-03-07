const express = require("express");
const mongoose = require("mongoose");
const { port, entry } = require("./globals");
const server = express();

//connect to mongo
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to DB!"))
  .catch((err) => console.log(err));

server.listen(port, () =>
  console.log(`\nServer live at http://localhost:${port}`)
);

