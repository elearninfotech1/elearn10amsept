let express = require("express");
let Treament = require("../model/treatmentModel");

let treatmentRouting = express.Router();

treatmentRouting.get("/", async (req, res) => {
  let treatment = await Treament.find();
  res.send(treatment);
});

treatmentRouting.post("/", async (req, res) => {
  let treatment = new Treament(req.body);
  let result = await treatment.save();
  res.send(result);
});

treatmentRouting.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let treatment = await Treament.deleteOne({ _id: id });
  res.send(treatment);
});

module.exports = treatmentRouting;
