import express, { Application, Request, Response } from "express";
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app: Application = express();
const port = process.env.PORT;
const UserData = require("./route/api/postUserData");
const ProductData = require("./route/api/postProductData");
const ConnectionMongoDb = require("./connection/connection");
const getDataProduct = require("./route/api/getDataProduct");
const postLogin = require("./route/api/postLogin");
const checkQuinicName = require("./route/api/checkQuinicName");

// Body parsing Middleware

ConnectionMongoDb;
app.use(bodyParser.json());
app.use(cors());

//post
app.use("/api/postUserData", UserData);
app.use("/api/postProductData", ProductData);
app.use("/api/postLogin", postLogin);
app.use("/api/checkQuinicName", checkQuinicName);
//---------------------------------------------

//get
app.use("/api/getDataProduct", getDataProduct);
//----------------------------------------------

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
