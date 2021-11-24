const express = require("express");
const games = require("./routes/games");
const keyboards = require("./routes/keyboards");
const cors = require("cors");
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use("/games", games);
app.use("/keyboards", keyboards);

app.listen(app.get("port"), () => {
  console.log("server running on port " + app.get("port"));
});
