import { model, Schema } from "mongoose";

interface Product {
  name: string;
  description: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}

const ProductDataSchema: Schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  size: {
    type: Array,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  star: {
    type: Number,
    require: true,
  },
});

const ProductData = model("Product", ProductDataSchema);

module.exports = ProductData;
