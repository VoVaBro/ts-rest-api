import mongoose from "mongoose";
import { config } from "./config";


  mongoose
  .connect(config.mongo_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("DB connected"))
  .catch((err) => console.log("DB error: " + err));



