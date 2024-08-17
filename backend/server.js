import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import AuthRoutes from "./Routes/AuthRoutes.js";
import { errorMiddleware } from "./Middleware/Error.js";
dotenv.config();
//middleware


const app = express();
app.use(express.json());
app.use(cookieParser())


//routes
app.use("/auth",AuthRoutes)



//DB_CONNECTION
mongoose
  .connect(process.env.DB_URL,{dbName:"Todo_app"})
  .then(() => {
    console.log("DataBase connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });


//error handler
app.use(errorMiddleware)

app.listen(4000, () => {
  console.log("server is up");
});
