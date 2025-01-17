import mongoose from "mongoose";
import {Schema} from 'mongoose'

const todoSchema = new Schema({
    title: String,
    des: String,
    idDone: Boolean
});
  
export const Todo = mongoose.model("todo",todoSchema);