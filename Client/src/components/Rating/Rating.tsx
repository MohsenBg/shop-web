import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Rating = ({ value, colors, activeColors }: any) => {
  return (
    <div>
      <StarRatingComponent
        name="rate2"
        value={value}
        editing={false}
        emptyStarColor={colors ? colors : "rgba(112, 250, 250, 0.682)"}
        starColor={activeColors ? activeColors : "rgb(12, 247, 216)"}
      />
    </div>
  );
};

export default Rating;
