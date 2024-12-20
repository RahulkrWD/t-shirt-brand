const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoute = require("./routes/authRoute");
const cors = require("cors");
const product = require("./routes/Product");
const profile = require("./routes/Profile");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB(); // mongodb connection

app.get("/", async function (req, res) {
  res.send({ message: "Welcome to my app Nova" });
});

// auth router
app.use("/auth", authRoute);
app.use("/product", product);
app.use("/profile", profile);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server running on PORT ${PORT}`));
