import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useSelector } from "react-redux";
import { initialState } from "../../../Redux/store";
import SearchBar from "../../searchBar/SearchBar";
import styles from "./SearchNav.module.scss";

const SearchNav = () => {
  const itemsShope = useSelector(
    (state: typeof initialState) => state.AllProductData.productData
  );
  useEffect(() => {
    setItemsShope(itemsShope);
  }, [itemsShope]);

  const [showSearchBar, setShowSearchBar] = useState("none");

  const showSearchBarHandler = () => {
    if (showSearchBar === "none") {
      setShowSearchBar("active");
    }
    if (showSearchBar === "active") {
      setShowSearchBar("disable");
    }
    if (showSearchBar === "disable") {
      setShowSearchBar("active");
    }
  };

  const [ItemsShope, setItemsShope] = useState(itemsShope);
  const getDataFromSearchBar = (ProductsFilter: any) => {
    let newProductItems = ProductsFilter.map((item: any) => ({
      ...item,
    }));
    setItemsShope(newProductItems);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.IconsSearchBar} onClick={showSearchBarHandler}>
          <FcSearch />
        </div>
        <div
          className={
            showSearchBar === "active"
              ? `${styles.searchBarContainer} ${styles.searchBarContainerActive}`
              : showSearchBar === "disable"
              ? `${styles.searchBarContainer} ${styles.searchBarContainerDisable}`
              : `${styles.searchBarContainer}`
          }
        >
          <div className={styles.searchBarComponent}>
            <div style={{ marginTop: "-5em" }}>
              <SearchBar
                getDataFillers={(itemsFilter: any) =>
                  getDataFromSearchBar(itemsFilter)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
