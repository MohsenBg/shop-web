import React, { useEffect, useState } from "react";
import Rating from "../../../components/Rating/Rating";
import styles from "../../../styles/editProduct.module.scss";
import axios from "axios";
import { Url } from "../../../Url";
import Select from "react-select";
import { MdDelete } from "react-icons/md";
import Loading from "../../../components/Loading/smallLoading/LoadingSmall";
import Question from "../../../components/message/Question/Question";
import router from "next/router";
import { useDispatch } from "react-redux";
import { ActionType } from "../../../Redux/AllProductData/ActionTypeAPD";

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

const options = [
  { value: "small", label: "small", id: 1 },
  { value: "medium", label: "medium", id: 2 },
  { value: "large", label: "large", id: 3 },
  { value: "x-large", label: "x-large", id: 4 },
];
let convert: any = [];
const SlugEdit = ({ mainProduct }: any) => {
  useEffect(() => {
    for (let i = 0; i < productSize.length; i++) {
      let filter = options.filter((item) => item.value === productSize[i]);
      convert[i] = filter[0];
    }
    console.log(convert);
  }, []);
  //state
  const [loading, setLoading] = useState<any>(false);
  const [deleteQuestion, setDeleteQuestion] = useState<any>(false);
  const [editProductQuestion, setEditProductQuestion] = useState<any>(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [questionRequest, setQuestionRequest] = useState<any>(false);
  const [path, setPath] = useState<any>("");
  //data  for post product
  const [fileUrl, setFileUrl] = useState<any>(mainProduct.img);
  const [ratingValue, setRatingValue] = useState<any>(mainProduct.star);
  const [productName, setProductName] = useState<any>(mainProduct.name);
  const [productSlug, setProductSlug] = useState<any>(mainProduct.slug);
  const [productDescription, setProductDescription] = useState<any>(
    mainProduct.description
  );
  const [productSize, setProductSize] = useState<any>(mainProduct.size);
  const [productPrice, setProductPrice] = useState<any>(mainProduct.price);
  //-----------------------------------
  const dispatch = useDispatch();
  const editDataProduct = async () => {
    dispatch({ type: ActionType.ON_LOADING });
    await axios
      .post(`${Url}api/editProduct`, {
        id: mainProduct._id,
        name: productName,
        description: productDescription,
        slug: productSlug,
        size: productSize,
        img: fileUrl,
        price: productPrice,
        star: ratingValue,
      })
      .then(function (response) {
        setQuestionRequest(true);
      });
    dispatch({ type: ActionType.END_LOADING });
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
      editDataProduct();
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

  const editProductAnswerHandler = (Answer: any) => {
    if (Answer) {
      checker();
      setEditProductQuestion(false);
    } else {
      setEditProductQuestion(false);
    }
  };

  const anotherProductHandler = (Answer: any) => {
    if (Answer) {
      setQuestionRequest(false);
      location.reload();
    } else {
      setQuestionRequest(false);
      if (!(typeof window === undefined)) {
        router.push("/", undefined, { shallow: true });
      }
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
    console.log("====================================");
    console.log(Size);
    console.log("====================================");
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
              text={"Do you want edit another Product?"}
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
        {editProductQuestion ? (
          <div className={styles.Question}>
            <Question
              text={"Are you sure you want edit this Product to shop?"}
              getAnswer={(Answer: any) => editProductAnswerHandler(Answer)}
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
                      <Loading />
                    </div>
                  ) : null}

                  {fileUrl ? (
                    <div>
                      <img src={fileUrl} alt="UploadImg" />
                      <div
                        className={styles.deleteIcon}
                        onClick={() => setDeleteQuestion(true)}
                      >
                        <MdDelete />
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
                    value={productName}
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
                    value={ratingValue}
                    type="number"
                    placeholder="Rate"
                    onChange={(e) => setRatingValue(e.target.value)}
                  />
                </div>
                <div className={styles.ProductDataPrice}>
                  <input
                    value={productPrice}
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
                    value={productDescription}
                    className={styles.descriptionInput}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.ProductDataSlug}>
                  <input
                    value={productSlug}
                    type="text"
                    placeholder="slug"
                    onChange={(e: any) => setProductSlug(e.target.value)}
                  />
                </div>
                <div className={styles.ProductDataSize}>
                  <span className={styles.inputName}>Size</span>
                  <div className={styles.inputSize}>
                    {convert === [] ? null : (
                      <Select
                        options={options}
                        isMulti
                        defaultValue={convert}
                        closeMenuOnSelect={false}
                        instanceId={1}
                        onChange={(e: any) => handelSize(e)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnAddProducts}>
          <button onClick={() => setEditProductQuestion(true)}>
            Edit Product
          </button>
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
export default SlugEdit;
