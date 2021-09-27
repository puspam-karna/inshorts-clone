//mongodb+srv://Puspam:Puspam@clone-falcone.tepfq.mongodb.net/clone-falcone?retryWrites=true&w=majority
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
const PORT = 8000;
const URL =
  "mongodb+srv://Puspam:Puspam@clone-falcone.tepfq.mongodb.net/clone-falcone?retryWrites=true&w=majority";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use("/", Route);

DefaultData();

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to server");
  });
