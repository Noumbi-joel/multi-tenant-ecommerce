import React from "react";

// comp
import { Checkbox, Divider } from "@nextui-org/react";
import { BodyText, Dropdown } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";
import VerticalDots from "../../public/VerticalDots.svg";
import { ITEM_ACTIONS } from "../../helpers";

// redux
import { useDispatch } from "react-redux";
import { HANDLE_ITEMS_SELECTED, HANDLE_MODAL_VISIBLE } from "../../constants";

const ListItem = ({ avatar, type, draft, item }) => {
  const dispatch = useDispatch();
  if (type === "itemList") {
    return (
      <div>
        <div className="linear-layout-flat">
          <Checkbox
            isSelected={item.selected}
            onChange={() =>
              dispatch({ type: HANDLE_ITEMS_SELECTED, payload: item })
            }
          >
            <img src={item.image} alt="res" className="product-item-search" />
            <BodyText
              type="mr"
              title={item.title}
              color={COLORS.grayscale_900}
              style={{ marginLeft: 20, marginRight: 20 }}
            />
            {item.draft && (
              <div className="draft">
                <BodyText type="sr" title="Draft" color={COLORS.primary_base} />
              </div>
            )}
          </Checkbox>
          <BodyText
            type="mr"
            title={item.price}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <BodyText
            type="mr"
            title={item.stock}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <div style={{ position: "relative" }}>
            <VerticalDots
              aria-label="v-dots"
              onClick={() =>
                dispatch({ type: HANDLE_MODAL_VISIBLE, payload: item.id })
              }
            />
            {item.visible && (
              <Dropdown item={item} itemEdit data={ITEM_ACTIONS} />
            )}
          </div>
        </div>
        <Divider style={{ marginTop: 16 }} />
      </div>
    );
  }

  return (
    <div className="top-item">
      <div className="linear-layout">
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
