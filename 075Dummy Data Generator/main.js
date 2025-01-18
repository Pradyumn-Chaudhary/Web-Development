import mongoose from "mongoose";
import express from "express";
import { Dummy } from "./models/data.js";
import { faker } from "@faker-js/faker";

let conn = await mongoose.connect("mongodb://localhost:27017/Dummy");

const app = express();
const port = 3000;

function generateDummyData() {
  return {
    Name: faker.person.fullName(), // Updated for version 9.x
    Profession: faker.person.jobTitle(), // Updated for version 9.x
    Age: (faker.number.bigInt({ min: 18, max: 65 })).toString(), // Correct usage in 9.x
    City: faker.location.city(), // Updated for version 9.x
    Salary: (faker.number.bigInt({ min: 100000, max: 1000000 })).toString(), // Correct usage in 9.x
    Company: faker.company.name(), // Updated for version 9.x
  };
}
app.get("/", (req, res) => {
  const dummyData = generateDummyData();
  const data = new Dummy(dummyData);
  data.save();
  res.send(
    "Data Saved: \n" + JSON.stringify(dummyData, null, 2) // Pretty print the JSON
);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
