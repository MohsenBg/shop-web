import { Model } from "mongoose";
import { Router, Request, Response } from "express";

const router = Router();

const UserDataModel: typeof Model = require("../../models/Users");

router.post("/", async (req: Request, res: Response) => {
  const UserName = req.body.userName;
  const Password = req.body.password;

  await UserDataModel.find({ UserName, Password }, (err, result) => {
    if (err) {
      res.status(200).send(err);
    }
    if (result) {
      //@ts-ignore
      req.session.user = result;
      //@ts-ignore
      console.log(req.session.user);
      res.status(200).send(result);
    }
  });
});

module.exports = router;
