import { model, Schema } from "mongoose";

const UsersDataSchema: Schema = new Schema({
  UserName: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Role: {
    type: String,
    default: "customer",
  },
});

const UsersData = model("Users", UsersDataSchema);

module.exports = UsersData;
