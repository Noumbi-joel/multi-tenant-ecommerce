import React from "react";
import { useState } from "react";

const SFDetailsImg = ({ imageDetails, fullImage }) => {
  const [index, setIndex] = useState(null);
  return (
    <>
      <div className="sf-details-img-column">
        {imageDetails.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="img-desc"
            className="sf-img-details"
            onMouseOver={() => setIndex(i)}
            onMouseOut={() => setIndex(null)}
          />
        ))}
      </div>
      <div>
        <div className="sf-img-details-f-container">
          <img
            src={index === null ? fullImage : imageDetails[index]}
            alt="img-desc"
            className="sf-img-details-full"
          />
        </div>
      </div>
    </>
  );
};

export default SFDetailsImg;
