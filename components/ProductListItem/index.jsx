import React, { useState } from "react";

// comp
import { Avatar, Checkbox, Divider } from "@nextui-org/react";
import { BodyText, Dropdown } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";
import VerticalDots from "../../public/VerticalDots.svg";

const ProductListItem = ({
  image,
  title,
  nbSales,
  avatar,
  type,
  draft,
  onClick,
  price,
  stock,
  modalVisible,
}) => {
  if (type === "search-p") {
    return (
      <div>
        <div className="linear-layout-flat">
          <Checkbox>
            <img src={image} alt="res" className="product-item-search" />
            <BodyText
              type="mr"
              title={title}
              color={COLORS.grayscale_900}
              style={{ marginLeft: 20, marginRight: 20 }}
            />
            {draft && (
              <div className="draft">
                <BodyText type="sr" title="Draft" color={COLORS.primary_base} />
              </div>
            )}
          </Checkbox>
          <BodyText
            type="mr"
            title={price}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <BodyText
            type="mr"
            title={stock}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <div style={{ position: "relative" }}>
            <VerticalDots aria-label="v-dots" onClick={onClick} />
            {modalVisible && <Dropdown />}
          </div>
        </div>
        <Divider style={{ marginTop: 16 }} />
      </div>
    );
  }

  return (
    <div className="product-item">
      <div className="linear-layout">
        {avatar && (
          <img
            src={
              "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            }
            className="product-item-search"
          />
        )}
        <div>
          <BodyText type="mm" title={title} color={COLORS.grayscale_900} />
          <BodyText type="mr" title={nbSales} color={COLORS.grayscale_900} />
        </div>
      </div>
      <RightArrowMd />
    </div>
  );
};

export default ProductListItem;
