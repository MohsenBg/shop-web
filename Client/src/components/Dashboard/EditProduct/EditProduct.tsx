import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../../Redux/AllProductData/ActionTypeAPD";
import { initialState } from "../../../Redux/store";
import { Url } from "../../../Url";
import AddCard from "../../Btn/addCard/AddCard";
import Question from "../../message/Question/Question";
import Rating from "../../Rating/Rating";
import SearchBar from "../../searchBar/SearchBar";
import styles from "./EditProduct.module.scss";
const EditProduct = () => {
  const itemsShope = useSelector(
    (state: typeof initialState) => state.AllProductData.productData
  );
  useEffect(() => {
    setItemsShope(itemsShope);
  }, [itemsShope]);

  const dispatch = useDispatch();

  const [deleteHover, setDeleteHover] = useState<any>("");
  const [editHover, setEditHover] = useState<any>("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [idProduct, setIdProduct] = useState("");

  const [ItemsShope, setItemsShope] = useState(itemsShope);
  const getDataFromSearchBar = (ProductsFilter: any) => {
    let newProductItems = ProductsFilter.map((item: any) => ({
      ...item,
    }));
    setItemsShope(newProductItems);
  };

  const DeleProductAnswerHandler = (value: any) => {
    if (value) {
      dispatch({ type: ActionType.ON_LOADING });
      axios
        .post(`${Url}api/deleteCard`, {
          id: idProduct,
        })
        .then((response) => {
          dispatch({ type: ActionType.END_LOADING });
        })
        .catch((err) => {
          console.log(err);
        });
      setShowQuestion(false);
      window.location.reload();
    } else {
      setShowQuestion(false);
    }
  };

  return (
    <>
      {showQuestion ? (
        <div className={styles.Question}>
          <Question
            text={"Are you sure you want Delete this Card?"}
            getAnswer={(Answer: any) => DeleProductAnswerHandler(Answer)}
            show={true}
          />
        </div>
      ) : null}
      <div className={styles.searchWrapper}>
        <SearchBar
          getDataFillers={(itemsFilter: any) =>
            getDataFromSearchBar(itemsFilter)
          }
        />
      </div>
      <div className={styles.shopContainer}>
        {ItemsShope.length < 1 ? (
          <div>Nothing Find try another keyword </div>
        ) : (
          ItemsShope.map((item: any) => {
            return (
              <div key={item._id} className={styles.shopItem}>
                {deleteHover === item._id ? (
                  <div className={styles.hoverMassage}>delete</div>
                ) : null}
                {editHover === item._id ? (
                  <div className={`${styles.hoverMassage} ${styles.hoverLeft}`}>
                    Edit
                  </div>
                ) : null}

                <div className={styles.shopImgBox}>
                  <div
                    className={styles.deleteIcon}
                    onMouseEnter={() => setDeleteHover(item._id)}
                    onMouseLeave={() => setDeleteHover("")}
                    onClick={() => {
                      setShowQuestion(true);
                      setIdProduct(item._id);
                    }}
                  >
                    <MdDelete />
                  </div>
                  <Link href={`/Admin/edit/${item.slug}`}>
                    <div
                      className={styles.editIcon}
                      onMouseEnter={() => setEditHover(item._id)}
                      onMouseLeave={() => setEditHover("")}
                    >
                      <AiFillEdit />
                    </div>
                  </Link>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={styles.shopImg}
                  />
                </div>
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

export default EditProduct;
