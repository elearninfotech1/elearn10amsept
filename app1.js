let express = require("express");
let cors = require("cors");
let studentRouting=require('./router/studentRoter1')

let app = express();
app.use(express.json());
app.use(cors());

app.use('/student1',studentRouting)

app.listen(4000);
