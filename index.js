const express = require("express");
const app = express();


const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));
var db = require('./api/db.json');
// Home route
app.get("/", (req, res) => {
  res.send("Welcome to an API");
});

// Mock API
app.get("/api/service", (req, res) => {
  res.send(JSON.stringify(db.service));
});
app.get("/api/service/:id", (req, res) => {
  function checkAge(id) {
    return id.id == Number(req.params.id);
  }
  var index = db.service.findIndex(checkAge)
  if(index.toString()!=-1)
  res.send(db.service[index]);
  else
  {
    res.send("Cannot GET /api/service/"+req.params.id+"/");
  }
});


app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});