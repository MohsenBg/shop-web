import { Router, Request, Response } from "express";

const router = Router();

const ProductDataModel = require("../../models/Product");

router.post("/", async (req: Request, res: Response) => {
  const name = req.body.name;
  const description = req.body.description;
  const slug = req.body.slug;
  const size = req.body.size;
  const img = req.body.img;
  const price = req.body.price;
  const star = req.body.star;

  const ProductData = await new ProductDataModel({
    name,
    description,
    slug,
    size,
    img,
    price,
    star,
  });
  try {
    await ProductData.save();
    res.send({ message: "connected" });
    console.log(ProductData);
  } catch (err) {
    res.send({ message: err });
    console.log(err);
  }
});

module.exports = router;
