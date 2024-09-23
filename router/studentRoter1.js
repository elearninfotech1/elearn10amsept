let express = require("express");
let connection = require("../dbconfig/db");
let studentRouting = express.Router();

studentRouting.get("/", (req, res) => {
  let query = `select * from student`;
  connection.query(query, (err, suc) => {
    if (err) throw err;
    res.send(suc);
  });
});

studentRouting.post("/", (req, res) => {
  let { id, name, address } = req.body;
  let query = `insert into student(id,name,address) values('${id}','${name}','${address}')`;
  connection.query(query, (err, suc) => {
    if (err) throw err;
    res.send(suc);
  });
});

studentRouting.delete("/:id", (req, res) => {
  let id = req.params.id;
  let query = `delete from student where id='${id}'`;
  connection.query(query, (err, suc) => {
    if (err) throw err;
    res.send(suc);
  });
});

studentRouting.get("/:id", (req, res) => {
  let id = req.params.id;
  let query = `select * from student where id='${id}'`;
  connection.query(query, (err, suc) => {
    if (err) throw err;
    res.send(suc);
  });
});

studentRouting.put("/:id", (req, res) => {
  let id1 = req.params.id;
  let { id, name, address } = req.body;
  let query = `update student set id='${id}', name='${name}', address='${address}' where id='${id1}'`;
  connection.query(query, (err, suc) => {
    if (err) throw err;
    res.send(suc);
  });
});

module.exports = studentRouting;
