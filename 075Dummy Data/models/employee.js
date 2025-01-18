const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  Name: String, // String is shorthand for {type: String}
  Job: String,
  Language: String,
  City: String,
  Salary: Number,
  isManager: Boolean,
});

module.exports = mongoose.model("Employee", employeeSchema);
