import { Router, Request, Response } from "express";

const router = Router();

const ProductDataModel = require("../../models/Product");

router.get("/", async (req: Request, res: Response) => {
  ProductDataModel.find({}, (err: any, result: any) => {
    if (err) {
      res.send(err);
    }
    if (result) {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
