var express = require("express");
var router = express.Router();
const excelToJson = require("convert-excel-to-json");

const xlResult = excelToJson({
  sourceFile: "optimal_wdupes.xlsx",
  header: { rows: 1 },
});

/* GET users listing. */
router.get("/builds", function (req, res) {
  res.send(xlResult);
});

module.exports = router;
