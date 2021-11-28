const router = require("express").Router();
const { getProducts } = require("../helpers/products");

router.get("/", async (req, res) => {
  const consolas = await getProducts(
    "https://www.gamestop.com/consoles-hardware/xbox-series-x%7Cs"
  );
  res.json(consolas);
});

module.exports = router;
