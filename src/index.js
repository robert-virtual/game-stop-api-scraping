const express = require("express");
const games = require("./routes/games");
const keyboards = require("./routes/keyboards");
const accesorios = require("./routes/accesorios");
const consolas = require("./routes/consolas");

const cors = require("cors");
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use("/games", games);
app.use("/keyboards", keyboards);
app.use("/accesorios", accesorios);
app.use("/consolas", consolas);
app.use("/", (req, res) => {
  res.json({
    endponts: {
      keyboards: "/keyboards",
      games: "/games",
      accesorios: "/accesorios",
    },
  });
});

app.listen(app.get("port"), () => {
  console.log("server running on port " + app.get("port"));
});
