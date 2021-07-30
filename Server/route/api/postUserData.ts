import { Router, Request, Response } from "express";

const router = Router();

const UserDataModel = require("../../models/Users");

router.post("/", async (req: Request, res: Response) => {
  const userName = req.body.userName;
  const password = req.body.password;
  console.log(userName + "  " + password);

  const UserData = await new UserDataModel({
    UserName: userName,
    Password: password,
  });
  try {
    await UserData.save();
    console.log(UserData);
    res.send(UserData);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
