const { default: axios } = require("axios");
const cheerio = require("cheerio");
const { getProducts } = require("../helpers/products");

const router = require("express").Router();

//https://www.gamestop.com/consoles-hardware/desktops-laptops

router.get("/", async (req, res) => {
  const items = await getProducts(
    "https://www.gamestop.com/consoles-hardware/desktops-laptops"
  );
  res.json(items);
});

module.exports = router;
