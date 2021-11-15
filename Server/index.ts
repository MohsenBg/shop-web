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
const checkLogin = require("./route/api/checkLogin");
const deleteCard = require("./route/api/deleteCard");
const editProduct = require("./route/api/editProduct");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Body parsing Middleware

ConnectionMongoDb;
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(
    cors({
      origin: ["http://localhost:3000","http://shop-web-eight.vercel.app"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  )
  .use(cookieParser())
  .use(
    session({
      key: "userId",
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { expires: 60 * 60 * 24 },
    })
  )
  .use(bodyParser.json());

//--------------------------------------
//------------- post ---------------\\
//signIn
app.use("/api/postUserData", UserData);
//addCardProduct
app.use("/api/postProductData", ProductData);
//login
app.use("/api/postLogin", postLogin);
//SingUp Check quinic userName
app.use("/api/checkQuinicName", checkQuinicName);
//---------------------------------------------

//get
app.use("/api/getDataProduct", getDataProduct);
//Check userLogin or not cookie
app.use("/api/checkLogin", checkLogin);
//----------------------------------------------

//put
app.use("/api/editProduct", editProduct);
//----------------------------//

//Deleted
app.use("/api/deleteCard", deleteCard);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "main page",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
