let express = require("express");
let Student = require("../model/studentModel");

let studentRouting = express.Router();

studentRouting.get("/", async (req, res) => {
  let student = await Student.find();
  if (student.length == 0) {
    res.send("No data found");
  }
  res.send(student);
});

studentRouting.post("/", async (req, res) => {
  let student = new Student(req.body);
  let result = await student.save();
  res.send(result);
});

studentRouting.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let student = await Student.deleteOne({ _id: id });
  res.send(student);
});

studentRouting.put("/:id", async (req, res) => {
  let id = req.params.id;
  let student = await Student.updateOne({ _id: id }, { $set: req.body });
  res.send(student);
});

studentRouting.get("/:id", async (req, res) => {
  let id = req.params.id;
  let student = await Student.findOne({ _id: id });
  res.send(student);
});

module.exports = studentRouting;
