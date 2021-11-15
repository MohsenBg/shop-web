import React, { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import styles from "./HeaderHome.module.scss";

const images = [
  {
    id: 1,
    url: "https://s4.uupload.ir/files/hearder02_ikgs.png",
    alt: "01.png",
  },
  {
    id: 2,
    url: "https://s4.uupload.ir/files/header03_wkzs.png",
    alt: "02.png",
  },
  {
    id: 3,
    url: "https://s4.uupload.ir/files/header01_3u1t.png",
    alt: "03.png",
  },
];

const HeaderHome = () => {
  const [idImage, setIdImage] = useState<number>(1);
  const nextImageHandler = () => {
    if (idImage === images.length) {
      setIdImage(1);
    } else {
      setIdImage(idImage + 1);
    }
  };
  const BeforeImageHandler = () => {
    if (idImage === 1) {
      setIdImage(images.length);
    } else {
      setIdImage(idImage - 1);
    }
  };
  console.log(idImage);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {images.map((item: any) => {
          return (
            <div className={styles.Images} key={item.id}>
              {item.id === idImage ? (
                <img src={item.url} alt={item.alt} />
              ) : null}
            </div>
          );
        })}
        <div className={styles.allDots}>
          {images.map((item: any) => {
            return (
              <div
                key={item.id}
                className={styles.SingleDot}
                style={
                  idImage === item.id ? { color: "black" } : { color: "white" }
                }
              >
                <GoPrimitiveDot />
              </div>
            );
          })}
        </div>
        <div
          className={styles.arrowIconLeft}
          onClick={() => BeforeImageHandler()}
        >
          <BiLeftArrowCircle />
        </div>
        <div
          className={styles.arrowIconRight}
          onClick={() => nextImageHandler()}
        >
          <BiRightArrowCircle />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
