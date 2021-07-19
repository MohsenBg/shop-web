import { connect } from "mongoose";
require("dotenv").config();
//@ts-ignore
const Url: string = process.env.MONGO_DB_URL;

const mongooseConnection = connect(Url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log("mongodb connected"))
  .catch((err: any) => {
    console.log(err.message);
    process.exit(1);
  });

module.exports = mongooseConnection;
