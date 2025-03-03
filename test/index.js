const express = require("express");
const path = require("path");
const app = express();

// 画像ファイルを読み込むための設定
app.use("/images", express.static(path.join(__dirname, "../images")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
