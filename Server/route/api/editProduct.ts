import { error } from "console";
import { Router, Request, Response } from "express";
import { Model } from "mongoose";

const router = Router();

const ProductDataModel: typeof Model = require("../../models/Product");

router.post("/", async (req: Request, res: Response) => {
  const _id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const slug = req.body.slug;
  const size = req.body.size;
  const img = req.body.img;
  const price = req.body.price;
  const star = req.body.star;
  await ProductDataModel.findById(_id, (err: any, update: any) => {
    update.name = name;
    update.description = description;
    update.slug = slug;
    update.size = size;
    update.img = img;
    update.price = price;
    update.star = star;
    update.save();
    if (err) {
      res.send(err);
    } else {
      res.send(update);
    }
  });
});

module.exports = router;
