import "dotenv/config";
import express, { json } from "express";
import { connect } from "mongoose";
import router from "./routes/routes.js";

const app = express();

app.use(json());

app.use(router);

const URI: string = process.env.MONGO_URI;
//database connection
connect(URI)
  .then((res) => {
    console.log("Listening to Port 3001");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
