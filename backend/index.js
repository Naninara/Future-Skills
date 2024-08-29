const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  postCard,
  getAllCards,
  getCardByTitle,
} = require("./controllers/CardControllers");
const app = express();

app.use(cors());
//middle ware for body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//test api
app.get("/ping", (req, res) => {
  res.send("Welcome...");
});

app.post("/cards", postCard);

app.get("/cards/:title", getCardByTitle);

app.get("/cards", getAllCards);

//db connection
mongoose
  .connect(
    "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/helpcenter?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db sucessfully");
    app.listen(3500, () => {
      console.log("Server listing on dev port 3500");
    });
  })
  .catch((e) => console.log(e));
