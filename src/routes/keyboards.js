const { default: axios } = require("axios");
const { getProducts } = require("../helpers/products");

const router = require("express").Router();

router.get("/html", async (req, res) => {
  const resp = await axios.get(
    "https://www.gamestop.com/gaming-accessories/keyboards"
  );
  const html = resp.data;
  res.send(html);
});
router.get("/", async (req, res) => {
  const items = await getProducts(
    "https://www.gamestop.com/gaming-accessories/keyboards"
  );

  res.json(items);
});

module.exports = router;
