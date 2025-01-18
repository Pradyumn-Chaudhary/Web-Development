import mongoose from "mongoose"
import {Schema} from "mongoose"

let dataSchema = new Schema({
    Name: String,
    Profession: String,
    Age: String,
    City: String,
    Salary: BigInt,
    Company: String
});

export const Dummy = mongoose.model("data", dataSchema);
