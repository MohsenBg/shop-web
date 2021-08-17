import React from "react";
import styles from "./Offers.module.scss";
import { useSelector } from "react-redux";
import { initialState } from "../../../Redux/store";
import Rating from "../../Rating/Rating";
import Link from "next/link";
const Offers = () => {
  const Product = useSelector(
    (state: typeof initialState) => state.AllProductData.productData
  );
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.boxContainer}>
          <div className={styles.OfferImage}>
            <h1>Best Offer</h1>
          </div>
          <div className={styles.OffersProduct}>
            {Product.map((item: any) => {
              return (
                <div className={styles.ProductBoxCard} key={item._id}>
                  <Link href={item.slug}>
                    <div>
                      <div className={styles.ProductImageCard}>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className={styles.detailsCard}>
                        <div className={styles.shopText}>
                          <p className={styles.shopHeader}>{item.name}</p>
                          <p className={styles.shopPrice}>${item.price}</p>
                          <div className={styles.rating}>
                            <Rating value={item.star} />
                          </div>
                          <p className={styles.shopSize}>
                            Size:
                            <span>
                              {item.size.map((sizes: any) => sizes).join(", ")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            <Link href="">
              <div className={styles.ProductBoxCard}>
                <div className={styles.seeMore}>
                  <h1>see More</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Offers);
