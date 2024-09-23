let express = require("express");
let Employee = require("../model/empModel");

let empRouting = express.Router();

empRouting.get("/", async (req, res) => {
  let employee = await Employee.find();
  if (employee.length == 0) {
    res.send("No data found");
  }
  res.send(employee);
});

empRouting.post("/", async (req, res) => {
  let employee = new Employee(req.body);
  let result = await employee.save();
  res.send(result);
});

empRouting.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let employee = await Employee.deleteOne({ _id: id });
  res.send(employee);
});

empRouting.put("/:id", async (req, res) => {
  let id = req.params.id;
  let employee = await Employee.updateOne({ _id: id }, { $set: req.body });
  res.send(employee);
});

empRouting.get("/:id", async (req, res) => {
  let id = req.params.id;
  let employee = await Employee.findOne({ _id: id });
  res.send(employee);
});

module.exports = empRouting;
