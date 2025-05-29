const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

// POST: Save address
router.post("/", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json({ message: "Address saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save address" });
  }
});

module.exports = router;
