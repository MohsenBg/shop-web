import { IconType } from "react-icons";
import { AiOutlineAppstoreAdd, AiOutlineEdit } from "react-icons/ai";
import AddProduct from "../pages/Admin/AddProduct";
import { GrInfo, GrAnalytics } from "react-icons/gr";
interface item {
  id: number;
  name: string;
  link: string;
  icon: IconType;
}

export const SideLeftDashBoard: Array<item> = [
  {
    id: 1,
    name: "AddProduct",
    link: "/Admin/AddProduct",
    icon: AiOutlineAppstoreAdd,
  },
  {
    id: 2,
    name: "editProduct",
    link: "/Admin/EditProduct",
    icon: AiOutlineEdit,
  },
  {
    id: 3,
    name: "userInfo",
    link: "/Admin/Information",
    icon: GrInfo,
  },
  {
    id: 4,
    name: "Analyse Sells",
    link: "/Admin/editProduct",
    icon: GrAnalytics,
  },
];
