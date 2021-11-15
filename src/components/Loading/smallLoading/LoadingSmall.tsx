import React from "react";
import LoadingSvg from "../../../public/assets/images/Loading/Ball-1s-200px.svg";
import styles from "./LoadingSmall.module.scss";
function Loading() {
  return (
    <div className={styles.Container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50,50)">
          <g transform="scale(0.7)">
            <circle cx="0" cy="0" r="50" fill="#67f81b"></circle>
            <circle cx="0" cy="-28" r="15" fill="#95007b">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 0 0;360 0 0"
              ></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Loading;
