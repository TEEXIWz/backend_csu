import express from "express";
import bodyParser from "body-parser";
import { router as index } from "./api/index";
import { router as student } from "./api/student";
import cors from "cors";

export const app = express();
// app.use("/", (req,res) => {
//     res.send("Hello!!");
// });
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use("/",index);
app.use("/student",student);