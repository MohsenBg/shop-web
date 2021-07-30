import { Model } from "mongoose";
import { Router, Request, Response } from "express";

const router = Router();

const UserDataModel: typeof Model = require("../../models/Users");

router.post("/", async (req: Request, res: Response) => {
  const UserName = req.body.userName;

  await UserDataModel.find({ UserName }, (err, result) => {
    if (err) {
      res.status(200).send(err);
    }
    if (result) {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
