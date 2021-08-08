import Head from "next/head";
import React, { useEffect } from "react";
import Rating from "../components/Rating/Rating";
import styles from "../styles/product.module.scss";
import * as TiIcons from "react-icons/ti";
import Link from "next/link";
import axios from "axios";
import { Url } from "../Url";
import { useDispatch } from "react-redux";
import { ActionType } from "../Redux/AllProductData/ActionTypeAPD";
import Error from "../components/message/Error/Error";

interface ItemShope {
  _id: number;
  name: string;
  description: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}
interface props {
  otherProduct: Array<ItemShope>;
  mainProduct: ItemShope;
}

const slug: React.FC<props> = ({ otherProduct, mainProduct }) => {
  const dispatch = useDispatch();
  dispatch({ type: ActionType.ON_LOADING });

  setTimeout(() => {
    dispatch({ type: ActionType.END_LOADING });
  }, 1000);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{mainProduct.name}</title>
      </Head>
      <Error
        getValueBtn={(value: any) => console.log(value)}
        countButton={2}
        btn2={"exit"}
        btn1={"try again"}
        text={"can not connect to server please try again"}
        icon={"error"}
        hidden={true}
      />
      <div className={styles.BackgroundProduct}>
        <div className={styles.filterProduct}>
          <div className={styles.productBox}>
            <div className={styles.leftBox}>
              <img
                src={mainProduct.img}
                alt={mainProduct.name}
                className={styles.productImg}
              />
            </div>
            <div className={styles.rightBox}>
              <div className={styles.Header}>
                <div className={styles.productName}>{mainProduct.name}</div>
                <div className={styles.Rating}>
                  <Rating
                    value={mainProduct.star}
                    colors={"gray"}
                    activeColors={"rgb(182,108,133)"}
                  />
                </div>
                <div className={styles.headerRight}>
                  <div className={styles.price}>
                    <h1>${mainProduct.price}</h1>
                  </div>
                  <div className={styles.iconAddCart}>
                    <span>+</span>
                    <TiIcons.TiShoppingCart />
                  </div>
                </div>
              </div>
              <div className={styles.main}>
                <h1>Description</h1>
                <p>{mainProduct.description}</p>
              </div>
              <div className={styles.footer}>
                <h1>otherProduct</h1>
                <div className={styles.otherProductContainer}>
                  {otherProduct.map((item) => (
                    <div className={styles.product} key={item._id}>
                      <Link href={item.slug}>
                        <div>
                          <img
                            className={styles.productImg}
                            src={item.img}
                            alt={item.name}
                          />
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${Url}api/getDataProduct`);
  const itemsShope = await res.data;
  const paths = itemsShope.map((item: any) => ({
    params: { slug: `${item.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const res = await axios.get(`${Url}api/getDataProduct`);
  const itemsShope = await res.data;
  const product = itemsShope.filter((item: any) =>
    item.slug.includes(params.slug)
  );
  const otherProduct = itemsShope.filter(
    (item: any) => !item.slug.includes(params.slug)
  );
  return {
    props: {
      mainProduct: product[0],
      otherProduct: otherProduct
        .sort(() => Math.random() - Math.random())
        .slice(0, 3),
    },
  };
};
export default slug;
