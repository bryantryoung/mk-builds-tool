var express = require("express");
var router = express.Router();
const excelToJson = require("convert-excel-to-json");

const xlResult = excelToJson({
  sourceFile: "optimal_wdupes.xlsx",
  header: { rows: 1 },
});

/* GET users listing. */
router.get("/balanced-builds", function (req, res) {
  // sort lits of objs to show top 10 most balanced buulds
  // multiply each of the attribute totals and take highest number
  const topTenBuilds = xlResult["optimal_wdupes"]
    .sort((a, b) => {
      const aProduct = a["E"] * a["F"] * a["G"] * a["H"] * a["I"] * a["J"];
      const bProduct = b["E"] * b["F"] * b["G"] * b["H"] * b["I"] * b["J"];
      if (aProduct < bProduct) return 1;
      return -1;
    })
    .splice(0, 10);
  res.send(topTenBuilds);
});

module.exports = router;
