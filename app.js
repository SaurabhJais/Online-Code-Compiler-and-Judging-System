import express from "express";
import { config } from "dotenv";

config();
const app = express();




app.get("/", (req, res)  => {
    console.log("Hello world");
    res.send("Hello world");
})






let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port : " + port)
})