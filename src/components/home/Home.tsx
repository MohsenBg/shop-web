import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";
import { itemsShope } from "../../Itmes/product";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import AddCard from "../Btn/addCard/AddCard";
import { useState } from "react";
// @ts-ignore
import SearchBar from "../searchBar/SearchBar";
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
          productItem={ItemsShope}
        />
      </div>
      <div className={styles.shopContainer}>
        {ItemsShope.map((item) => {
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
                  <ReactStars
                    count={5}
                    size={20}
                    isHalf={true}
                    color="rgba(112, 250, 250, 0.382)"
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="rgb(12, 247, 216)"
                    edit={false}
                    value={item.star}
                  />
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
        })}
      </div>
    </>
  );
};

export default HomeComponent;
