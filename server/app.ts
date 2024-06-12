import "dotenv/config";
import express, { json } from "express";
import { connect } from "mongoose";

const app = express();

app.use(json());

const URI: string = process.env.MONGO_URI || "";

//database connection
connect(URI)
  .then((res) => {
    console.log("Listening to Port 3001");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
