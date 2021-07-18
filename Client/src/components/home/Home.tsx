import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";
import { itemsShope } from "../../Itmes/product";
// @ts-ignore
import AddCard from "../Btn/addCard/AddCard";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
// @ts-ignore
import Rating from "../Rating/Rating";

const HomeComponent = () => {
  const [ItemsShope, setItemsShope] = useState(itemsShope);

  const getDataFromSearchBar = (ProductsFilter: any) => {
    let newProductItems = ProductsFilter.map((item: any) => ({
      ...item,
    }));
    setItemsShope(newProductItems);
  };

  return (
    <>
      <div className={styles.searchWrapper}>
        <SearchBar
          getDataFillers={(itemsFilter: any) =>
            getDataFromSearchBar(itemsFilter)
          }
        />
      </div>
      <div className={styles.shopContainer}>
        {ItemsShope.length < 1 ? (
          <div className="">Nothing Find try another keyword </div>
        ) : (
          ItemsShope.map((item) => {
            return (
              <div key={item.id} className={styles.shopItem}>
                <Link href={`/${item.slug}`}>
                  <div className={styles.shopImgBox}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.shopImg}
                    />
                  </div>
                </Link>
                <div className={styles.shopText}>
                  <p className={styles.shopHeader}>{item.name}</p>
                  <p className={styles.shopPrice}>${item.price}</p>
                  <div className={styles.rating}>
                    <Rating value={item.star} />
                  </div>
                  <p className={styles.shopSize}>
                    Size:{"  "}
                    <span>{item.size.map((sizes) => sizes).join(", ")}</span>
                  </p>
                </div>
                <div className={styles.buttons}>
                  <AddCard url={item.slug} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default HomeComponent;
