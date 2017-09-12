import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import ProductRoutes from "./routes/ProductRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");


const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

app.get("/",function(request,response){
  return response.json({hello:"world"});
})

app.post("/", function (request, response) {
  return response.json({hello: "post world"})
})

// app.get("/contacts/:id",function(request,response){
//   return response.json({})
// })
//
// app.post("/products", function (request, response){
//   return response.json({products})
// })


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
