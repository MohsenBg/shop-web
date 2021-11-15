import express, { Application, Request, Response } from "express";
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app: Application = express();
const UserData = require("./route/api/postUserData");
const ProductData = require("./route/api/postProductData");
const { Connect_Mongo_DB } = require("./connection/connection");
const getDataProduct = require("./route/api/getDataProduct");
const postLogin = require("./route/api/postLogin");
const checkQuinicName = require("./route/api/checkQuinicName");
const checkLogin = require("./route/api/checkLogin");
const deleteCard = require("./route/api/deleteCard");
const editProduct = require("./route/api/editProduct");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors({ origin: process.env.CORS }))
  .use(cookieParser())
  .use(
    session({
      key: "userId",
      secret: `${process.env.SECRET}`,
      resave: false,
      saveUninitialized: false,
      cookie: { expires: 60 * 60 * 24 },
    })
  )
  .use(bodyParser.json());

//Body parsing Middleware
Connect_Mongo_DB(app);
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

app.get("/", async (req, res) => {
  return res.status(200).send({
    message: "main page",
  });
});
