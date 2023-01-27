import React from "react";

// comp
import BodyText from "../BodyText";

const SFCart = ({ image, title, color, size, qty, unitPrice }) => {
  return (
    <div className="sf-cart">
      <div className="sf-cart-image-container">
        <img src={image} alt={image} className="sf-cart-image" />
      </div>
      <div className="sf-cart-infos">
        <BodyText type="mr" title={title} color="#151515" />
        <div className="sf-cart-row">
          <BodyText type="sr" title="Color: " color="#151515" />
          <BodyText type="sr" title={color} color="#151515" />
        </div>
        <div className="sf-cart-row">
          <BodyText type="sr" title="Size: " color="#151515" />
          <BodyText type="sr" title={size} color="#151515" />
        </div>

        <div className="sf-cart-row-remove-container">
          <BodyText
            type="mr"
            title={`${qty} x FCFA ${unitPrice}`}
            color="#444444"
          />
          <BodyText type="sr" title="Remove" color="#000" />
        </div>
      </div>
    </div>
  );
};

export default SFCart;
