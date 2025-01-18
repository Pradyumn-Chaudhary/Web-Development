const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Employee = require("./models/employee");
const Chance = require("chance");
const chance = new Chance();

mongoose.connect("mongodb://localhost:27017/Company");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  //Generate Random Data
  for (let index = 0; index < 7; index++) {
    let e = await Employee.create({
      Name: chance.name(), // Random name
      Job: chance.profession(), // Random job/profession
      Language: chance.pickone(["Python", "JavaScript", "Java", "C++"]), // Random language
      City: chance.city(), // Random city
      Salary: chance.integer({ min: 300000, max: 1500000 }), // Random salary
      isManager: chance.bool(), // Random boolean
    });
    console.log({ message: "Employee generated successfully", data: e });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
