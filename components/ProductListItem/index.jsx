import React from "react";

// comp
import { Avatar } from "@nextui-org/react";
import { BodyText } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";

const ProductListItem = ({ image, title, nbSales, avatar }) => {
  return (
    <div className="product-item">
      <div className="linear-layout">
        {avatar && <Avatar squared text="JD" />}
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
