import mongoose from "mongoose";

const schema = new mongoose.Schema({
 year: {
   required: true,
   type: String
 },
 make: {
   required: true,
   type: String
 },
 model: {
   required: true,
   type: String
 }
});

export default mongoose.model("Vehicles", schema);

//This relates to the collection "vehicles".
