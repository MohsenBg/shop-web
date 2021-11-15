import { Application } from "express";
import { connect } from "mongoose";
require("dotenv").config();
//@ts-ignore

const Connect_Mongo_DB = async (app: Application) => {
  await connect(`${process.env.MONGO_DB_URL}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("mongodb connected");
      try {
        app.listen(process.env.PORT, (): void => {
          console.log(`Connected successfully on port ${process.env.PORT}`);
        });
      } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
      }
    })
    .catch((err: any) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = { Connect_Mongo_DB };
