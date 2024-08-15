require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
const { connectDb } = require("./config/server");
const categoryRoutes = require("./routes/categoryRoute");

connectDb();

app.use(express.json());

// routes

app.use("/categories", categoryRoutes);
