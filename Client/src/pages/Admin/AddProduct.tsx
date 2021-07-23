import React, { useState } from "react";
import styles from "../../styles/AddProduct.module.scss";
import Select from "react-select";
import axios from "axios";
import LoadingSmall from "../../components/Loading/smallLoading/LoadingSmall";
import Rating from "../../components/Rating/Rating";
import { Url } from "../../Url";
import * as MdIcons from "react-icons/md";
import Question from "../../components/message/Question/Question";
import Loading from "../../components/Loading/mainLoading/Loading";
import { useRouter } from "next/router";

const options = [
  { value: "small", label: "small", id: 1 },
  { value: "medium", label: "medium", id: 2 },
  { value: "large", label: "large", id: 3 },
  { value: "x-large", label: "x-large", id: 4 },
];

const AddProduct = () => {
  const router = useRouter();
  //state
  const [loading, setLoading] = useState<any>(false);
  const [deleteQuestion, setDeleteQuestion] = useState<any>(false);
  const [addProductQuestion, setAddProductQuestion] = useState<any>(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [questionRequest, setQuestionRequest] = useState<any>(false);
  const [path, setPath] = useState<any>("");
  //data  for post product
  const [fileUrl, setFileUrl] = useState<any>("");
  const [ratingValue, setRatingValue] = useState<any>("");
  const [productName, setProductName] = useState<any>("");
  const [productSlug, setProductSlug] = useState<any>("");
  const [productDescription, setProductDescription] = useState<any>("");
  const [productSize, setProductSize] = useState<any>([]);
  const [productPrice, setProductPrice] = useState<any>("");
  //-----------------------------------

  const postDataProduct = async () => {
    console.log("b");

    setMainLoading(true);

    await axios
      .post(`${Url}api/postProductData`, {
        name: productName,
        description: productDescription,
        slug: productSlug,
        size: productSize,
        img: fileUrl,
        price: productPrice,
        star: ratingValue,
      })
      .then(function (response) {
        setMainLoading(false);
        setQuestionRequest(true);
      });

    setMainLoading(false);
  };

  const checker = () => {
    if (
      fileUrl !== "" &&
      ratingValue.length != "" &&
      productName.length != "" &&
      productSlug.length != "" &&
      productDescription.length != "" &&
      productSize.length != [] &&
      productPrice.length != ""
    ) {
      console.log("a");
      postDataProduct();
    }
  };

  const deleteAnswerHandler = (Answer: any) => {
    if (Answer) {
      setFileUrl("");
      setDeleteQuestion(false);
    } else {
      setDeleteQuestion(false);
    }
  };

  const addProductAnswerHandler = (Answer: any) => {
    if (Answer) {
      checker();
      setAddProductQuestion(false);
    } else {
      setAddProductQuestion(false);
    }
  };

  const anotherProductHandler = (Answer: any) => {
    if (Answer) {
      setQuestionRequest(false);
      location.reload();
    } else {
      setQuestionRequest(false);
      router.push("/", undefined, { shallow: true });
    }
  };
  const UploadHandler = (file: any) => {
    const formData: any = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "vptapsh2");
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dozkb26zl/image/upload", formData)
      .then((response) => {
        setFileUrl(response.data.url);
        setLoading(false);
      });
  };
  const handelSize = (Size: any) => {
    let value = Size.map((data: any) => data.value);
    setProductSize(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.filterProduct}>
        {mainLoading ? (
          <div className={styles.mainLoading}>
            <Loading />
          </div>
        ) : null}
        <h1 className={styles.titleAddProduct}>Add Product</h1>

        {questionRequest ? (
          <div className={styles.Question}>
            <Question
              text={"Do you want Add another Product?"}
              getAnswer={(Answer: any) => anotherProductHandler(Answer)}
            />
          </div>
        ) : null}

        {deleteQuestion ? (
          <div className={styles.Question}>
            <Question
              text={"Are you sure you want Delete this Image?"}
              getAnswer={(Answer: any) => deleteAnswerHandler(Answer)}
            />
          </div>
        ) : null}
        {addProductQuestion ? (
          <div className={styles.Question}>
            <Question
              text={"Are you sure you want Add this Product to shop?"}
              getAnswer={(Answer: any) => addProductAnswerHandler(Answer)}
            />
          </div>
        ) : null}
        <div className={styles.boxFrom}>
          <div className={styles.allProductData}>
            <div className={styles.left}>
              <div className={styles.uploadImg}>
                <div className={styles.productImg}>
                  {loading ? (
                    <div className={styles.Loading}>
                      <LoadingSmall />
                    </div>
                  ) : null}

                  {fileUrl ? (
                    <div>
                      <img src={fileUrl} alt="UploadImg" />
                      <div
                        className={styles.deleteIcon}
                        onClick={() => setDeleteQuestion(true)}
                      >
                        <MdIcons.MdDelete />
                      </div>
                    </div>
                  ) : !loading && fileUrl === "" ? (
                    <div>
                      <input
                        className={styles.inputUpload}
                        type="file"
                        onChange={(e) => UploadHandler(e.target.files)}
                      />
                      <h3> Click here to Upload Image Product</h3>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.header}>
                <div className={styles.ProductDataName}>
                  <input
                    type="text"
                    placeholder="ProductName"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                  <br />
                </div>
                <div className={styles.ProductDataRating}>
                  <Rating
                    colors={"gray"}
                    activeColors={"rgb(182,108,133)"}
                    value={parseFloat(ratingValue)}
                  />
                  <input
                    type="number"
                    placeholder="Rate"
                    onChange={(e) => setRatingValue(e.target.value)}
                  />
                </div>
                <div className={styles.ProductDataPrice}>
                  <input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                  <span>$</span>
                </div>
              </div>

              <div className={styles.main}>
                <div className={styles.ProductDataDescription}>
                  <span className={styles.inputName}>Description</span> <br />
                  <textarea
                    placeholder="description"
                    className={styles.descriptionInput}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.ProductDataSlug}>
                  <input
                    type="text"
                    placeholder="slug"
                    onChange={(e: any) => setProductSlug(e.target.value)}
                  />
                </div>
                <div className={styles.ProductDataSize}>
                  <span className={styles.inputName}>Size</span>
                  <div className={styles.inputSize}>
                    <Select
                      options={options}
                      isMulti
                      closeMenuOnSelect={false}
                      instanceId={1}
                      onChange={(e: any) => handelSize(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnAddProducts}>
          <button onClick={() => setAddProductQuestion(true)}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
