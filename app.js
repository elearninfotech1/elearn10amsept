let express = require("express");
require("./dbconfig/dbcon");
let studentRouting = require("./router/studentRoter");
let cors = require("cors");
const empRouting = require("./router/empRoter");
const signupRouting = require("./router/signupRoter");
const treatmentRouting = require("./router/treatmentRoter");

let app = express();
app.use(express.json());
app.use(cors());

app.use("/student", studentRouting);
app.use("/employee", empRouting);
app.use("/signup", signupRouting);
app.use("/treatment", treatmentRouting);

app.listen(4000);
