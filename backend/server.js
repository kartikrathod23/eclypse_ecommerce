require("dotenv").config(); // <- Add this at the top

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const addressRoutes = require("./routes/address");
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo Error:", err));

// Routes
app.use("/api/address", addressRoutes);
app.use('/api/cart', cartRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
