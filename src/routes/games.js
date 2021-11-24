const { default: axios } = require("axios");
const cheerio = require("cheerio");

const router = require("express").Router();

router.get("/html", async (req, res) => {
  //https://www.gamestop.com/video-games/pc-games
  const resp = await axios.get("https://www.gamestop.com/video-games/pc-games");
  const html = resp.data;
  res.send(html);
});
router.get("/", async (req, res) => {
  //https://www.gamestop.com/video-games/pc-games
  const resp = await axios.get("https://www.gamestop.com/video-games/pc-games");
  const html = resp.data;
  const games = [];
  const $ = cheerio.load(html);
  const imgs = $(".product-grid-tile-wrapper .tile-image", html);
  const prices = $(".product-grid-tile-wrapper .actual-price", html);
  $(".pd-name", html).each((i, el) => {
    games.push({
      name: $(el).text(),
      img: $(imgs[i]).attr("data-src"),
      price: $(prices[i]).text(),
    });
  });
  res.json(games);
});

module.exports = router;
