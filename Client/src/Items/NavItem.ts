import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineBook, AiOutlineDashboard } from "react-icons/ai";

interface NavItem {
  id: number;
  name: string;
  icon: IconType;
  link: string;
}

export const navItem: Array<NavItem> = [
  {
    id: 1,
    name: "Home",
    icon: GoHome,
    link: "/",
  },
  {
    id: 2,
    name: "About",
    icon: FcAbout,
    link: "/About",
  },
  {
    id: 3,
    name: "SignUp",
    icon: AiOutlineBook,
    link: "/user/SignUp",
  },
  {
    id: 4,
    name: "Login",
    icon: IoMdLogIn,
    link: "/user/Login",
  },
  {
    id: 5,
    name: "Dashboard",
    icon: AiOutlineDashboard,
    link: "/user/Login",
  },
];
