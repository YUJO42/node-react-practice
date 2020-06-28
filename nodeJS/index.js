const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yujo:asd123@myfirstcluster-oufry.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    },
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB ERROR!!!!!!"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(
  port,
  () => console.log(`Example app listening at http://localhost:${port}`),
);
