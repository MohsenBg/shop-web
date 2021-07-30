import axios from "axios";
import { store } from "../Redux/store";
import { Url } from "../Url";

interface ItemShope {
  id: number;
  name: string;
  description: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}

export const itemsShop: Array<ItemShope> =
  store.getState().AllProductData.productData;
