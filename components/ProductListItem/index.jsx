import React from "react";

// comp
import { Avatar, Checkbox, Divider } from "@nextui-org/react";
import { BodyText } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";
import VerticalDots from "../../public/VerticalDots.svg";

const ProductListItem = ({ image, title, nbSales, avatar, type, draft, onClick }) => {
  if (type === "search-p") {
    return (
      <div>
        <div className="linear-layout-flat">
          <Checkbox>
            <img
              src="https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp"
              alt="res"
              className="product-item-search"
            />
            <BodyText
              type="mr"
              title="Shelves"
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
            title="FCFA32,500"
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <BodyText
            type="mr"
            title="23 in stock"
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <VerticalDots
            aria-label="v-dots"
            onClick={onClick}
          />
        </div>
        <Divider style={{ marginTop: 16 }} />
      </div>
    );
  }

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
