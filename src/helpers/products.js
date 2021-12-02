const { default: axios } = require("axios");
const cheerio = require("cheerio");
const baseUrl = "https://www.gamestop.com";

async function getProducts(url) {
  const resp = await axios.get(url);
  const html = resp.data;
  const $ = cheerio.load(html);
  const items = [];

  const links = $(".product-grid-tile-wrapper .product-tile-link", html);

  const imgs = $(".product-grid-tile-wrapper .tile-image", html);
  const prices = $(".product-grid-tile-wrapper .actual-price", html);
  $(".pd-name", html).each((i, el) => {
    let link = $(links[i]).attr("href");
    link = link.startsWith("http") ? link : baseUrl + link;
    items.push({
      name: $(el).text(),
      img: $(imgs[i]).attr("data-src"),
      price: $(prices[i]).text(),
      link,
    });
  });
  return items;
}

module.exports = {
  getProducts,
};
