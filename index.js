require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Feeds Stray server",
  });
});

/* VARIABLES */
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;

/* DB CONNECTION */
mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });