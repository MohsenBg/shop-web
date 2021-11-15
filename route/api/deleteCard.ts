import { Router, Request, Response } from "express";
import { Model } from "mongoose";

const router = Router();
const ProductDataModel: typeof Model = require("../../models/Product");

router.post("/", (req: Request, res: Response) => {
  const id = req.body.id;

  ProductDataModel.findByIdAndDelete(id, null, (err: any, result: any) => {
    if (err) {
      res.send(err);
    }
    if (result) {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

module.exports = router;
