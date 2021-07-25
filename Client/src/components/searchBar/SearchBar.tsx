import styles from "./SearchBar.module.scss";
import React from "react";
import * as BiIcons from "react-icons/bi";
import { useState, useEffect } from "react";
import { initialState } from "../../Redux/store";
import { useSelector } from "react-redux";

interface ItemShope {
  _id: number;
  name: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}

const SearchBar = ({ getDataFillers }: any) => {
  const itemsShope = useSelector(
    (state: typeof initialState) => state.AllProductData.productData
  );
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

  const filteredProduct = itemsShope.filter((product: any) =>
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
