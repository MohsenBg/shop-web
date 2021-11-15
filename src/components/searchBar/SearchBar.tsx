import styles from "./SearchBar.module.scss";
import React, { useRef } from "react";
import * as BiIcons from "react-icons/bi";
import { useState, useEffect } from "react";
import { initialState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import router from "next/router";
import { ActionTypeSearch } from "../../Redux/search/ActionTypeSearch";

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
  const dispatch = useDispatch();

  const itemsShope = useSelector(
    (state: typeof initialState) => state.AllProductData.productData
  );
  const [keyword, setKeyword] = useState("");
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    SendDataToHome();
    return () => {};
  }, [keyword]);

  const refInput: any = useRef();

  useEffect(() => {
    //Alert if clicked on outside of element
    function handleClickOutside(event: any) {
      if (refInput.current && !refInput.current.contains(event.target)) {
        setFocus(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refInput]);

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

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && keyword.length > 0) {
      event.target.blur();
      dispatch({
        type: ActionTypeSearch.STORE_VALUE,
        payload: filteredProduct,
      });
      setFocus(false);
      router.push("/search", undefined, { shallow: true });
    }
  };
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.mainContent} ref={refInput}>
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          value={keyword}
          onFocus={() => setFocus(true)}
          placeholder="Search"
          onChange={(event) => onChangSearchValue(event)}
          className={styles.searchBar}
        />
        <div className={styles.iconSearch}>
          <BiIcons.BiSearchAlt />
        </div>
        {focus ? (
          <div className={styles.boxPreview}>
            {filteredProduct.length > 0 ? (
              <div>
                {keyword.length > 0 ? (
                  <div className={styles.searchResult}>
                    {filteredProduct.map((item: any) => {
                      return (
                        <Link href={`/${item.slug}`} key={item._id}>
                          <div
                            className={styles.searchCard}
                            onClick={() => {
                              setFocus(false);
                              setKeyword(item.name);
                            }}
                          >
                            <div className={styles.iconSearchResult}>
                              <BiIcons.BiSearchAlt />
                            </div>
                            <div className={styles.NameSearchCard}>
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
