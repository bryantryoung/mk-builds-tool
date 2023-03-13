const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const excelToJson = require("convert-excel-to-json");
const buildsRoute = require("./routes/builds");
const balancedBuildsRoute = require("./routes/balancedBuilds");

const port = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from api");
});

app.get("/builds", buildsRoute);
app.get("/balanced-builds", balancedBuildsRoute);

/* app.post("/build", (req, res) => {
  const build = req.body;
  console.log(build);
  builds.push(build);
  res.send(builds);
}); */

app.use((req, res, next) => {
  res.send("404 error, page not found");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
