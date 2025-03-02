const express = require("express");
const app = express();

// 画像ファイルを読み込むための設定
app.use("/images", express.static(`${__dirname}/images`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
