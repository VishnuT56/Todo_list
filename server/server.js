const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//  Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
