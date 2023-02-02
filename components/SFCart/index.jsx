import React from "react";
import { REMOVE_CART_ITEM } from "../../constants";

// comp
import BodyText from "../BodyText";

const SFCart = ({ image, title, color, size, qty, unitPrice, id, dispatch }) => {
  return (
    <div className="sf-cart">
      <div className="sf-cart-image-container">
        <img src={image} alt={image} className="sf-cart-image" />
      </div>
      <div className="sf-cart-infos">
        <BodyText type="mr" title={title} color="#151515" />
        <div className="sf-cart-row">
          <BodyText type="sr" title="Color:&nbsp;" color="#151515" />
          <BodyText type="sr" title={color} color="#151515" />
        </div>
        <div className="sf-cart-row">
          <BodyText type="sr" title="Size:&nbsp;" color="#151515" />
          <BodyText type="sr" title={size} color="#151515" />
        </div>

        <div className="sf-cart-row-remove-container">
          <BodyText
            type="mr"
            title={`${qty} x FCFA ${unitPrice}`}
            color="#444444"
          />
          <BodyText
            type="sr"
            title="Remove"
            color="#000"
            onClick={() => dispatch({ type: REMOVE_CART_ITEM, payload: id })}
          />
        </div>
      </div>
    </div>
  );
};

export default SFCart;
