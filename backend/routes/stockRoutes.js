const express = require("express");
const Stock = require("../models/Stocks");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ createdAt: -1 });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stocks" });
  }
});

router.get("/watchlist", async (req, res) => {
  try {
    const stocks = await Stock.find({ isWatchlisted: true });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching watchlist" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { symbol, companyName, price, change } = req.body;

    const stock = await Stock.create({
      symbol,
      companyName,
      price,
      change,
    });

    res.status(201).json(stock);
  } catch (error) {
    res.status(400).json({ message: "Error creating stock" });
  }
});

router.patch("/:id/watchlist", async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    stock.isWatchlisted = !stock.isWatchlisted;
    await stock.save();

    res.json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error updating watchlist" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    res.json({ message: "Stock deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting stock" });
  }
});

module.exports = router;