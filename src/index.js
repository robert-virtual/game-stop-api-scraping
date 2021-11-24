const express = require("express");
const games = require("./routes/games");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/games", games);

app.listen(app.get("port"), () => {
  console.log("server running on port " + app.get("port"));
});
