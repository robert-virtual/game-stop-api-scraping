async function getProducts(url) {
  const resp = await axios.get(url);
  const html = resp.data;
  const $ = cheerio.load(html);
  const items = [];

  const imgs = $(".product-grid-tile-wrapper .tile-image", html);
  const prices = $(".product-grid-tile-wrapper .actual-price", html);
  $(".pd-name", html).each((i, el) => {
    items.push({
      name: $(el).text(),
      img: $(imgs[i]).attr("data-src"),
      price: $(prices[i]).text(),
    });
  });
  return items;
}

module.exports = {
  getProducts,
};
