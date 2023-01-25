import React from "react";

// comp
import { BodyText } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";

const ListItem = ({ avatar, item }) => {
  return (
    <div className="top-item">
      <div className="top-item-row">
        {avatar ? (
          <>
            <img
              src={
                "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
              }
              className="product-item-search"
            />
            <div>
              <BodyText
                type="mm"
                title={item.title}
                color={COLORS.grayscale_900}
              />
              <BodyText
                type="mr"
                title={item.nbSales + " Sales"}
                color={COLORS.grayscale_900}
              />
            </div>
          </>
        ) : (
          <div className="column-layout-default">
            <BodyText
              type="mm"
              title={item.name}
              color={COLORS.grayscale_900}
            />
            <BodyText
              type="mr"
              title={"Total spent: FCFA" + item.totalSpent}
              color={COLORS.grayscale_900}
            />
          </div>
        )}
      </div>
      <RightArrowMd />
    </div>
  );
};

export default ListItem;
