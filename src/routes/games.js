const { default: axios } = require("axios");
const cheerio = require("cheerio");
const { getProducts } = require("../helpers/products");

const router = require("express").Router();

router.get("/html", async (req, res) => {
  //https://www.gamestop.com/video-games/pc-games
  const resp = await axios.get("https://www.gamestop.com/video-games/pc-games");
  const html = resp.data;
  res.send(html);
});
router.get("/", async (req, res) => {
  //https://www.gamestop.com/video-games/pc-games
  const games = await getProducts(
    "https://www.gamestop.com/video-games/pc-games"
  );
  res.json(games);
});

module.exports = router;
