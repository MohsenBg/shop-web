import styles from "./SearchBar.module.scss";
import React from "react";
import * as BiIcons from "react-icons/bi";
import { useState, useEffect } from "react";
import { itemsShope } from "../../Itmes/product";
interface ItemShope {
  id: number;
  name: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}

const SearchBar = ({ getDataFillers }: any) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log(keyword);
    console.log(filteredProduct);
    SendDataToHome();
    return () => {};
  }, [keyword]);

  const SendDataToHome = () => {
    getDataFillers(filteredProduct);
  };

  const onChangSearchValue = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredProduct = itemsShope.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  return (
    <div className={styles.searchBarContainer}>
      <input
        placeholder="Search"
        onChange={(event) => onChangSearchValue(event)}
        className={styles.searchBar}
      />
      <div className={styles.iconSearch}>
        <BiIcons.BiSearchAlt />
      </div>
    </div>
  );
};

export default SearchBar;
