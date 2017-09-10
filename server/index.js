import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
app.use(contactRoutes);

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost");


const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

app.get("/",function(request,response){
  return response.json({hello:"world"});
})

// app.get("/contacts",function(request,response){
//   return response.json({contacts})
// })

// app.get("/vehicles",function(request,response){
//   return response.json({vehicles})
// })

// app.get("/comments",function(request,response){
//   return response.json({comments})
// })

// app.get("/products",function(request,response){
//   return response.json({products})
// })

app.get("/contacts/:id",function(request,response){
  return response.json({})
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
