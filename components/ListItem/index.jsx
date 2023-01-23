import React from "react";

// comp
import { Checkbox, Divider } from "@nextui-org/react";
import { BodyText, Dropdown } from "..";

// assets
import { COLORS } from "../../assets/colors";
import RightArrowMd from "../../public/right-arrow-md.svg";
import VerticalDots from "../../public/VerticalDots.svg";
import FullFilled from "../../public/fullfilled.svg";
import UnFullFilled from "../../public/unfullfilled.svg";
import { ITEM_ACTIONS, ITEM_CAT_ACTIONS } from "../../helpers";

// redux
import { useDispatch } from "react-redux";
import {
  HANDLE_CAT_ITEM_SELECT,
  HANDLE_DROPDOWN_CAT_ITEM,
  HANDLE_ITEM_SELECTED,
  HANDLE_MODAL_VISIBLE,
} from "../../constants";
import { useRouter } from "next/router";

const ListItem = ({ avatar, type, item }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (type) => {
    if (type === "customerDetails") {
      return router.push(`/_sites/dashboard/customers/customerDetails`);
    }
    return router.push(`/_sites/dashboard/orders/orderDetails`);
  };

  if (type === "itemList") {
    return (
      <div>
        <div
          className={
            item.selected
              ? "linear-layout-flat item-list-active"
              : "linear-layout-flat"
          }
        >
          <div className="itemList-checkbox">
            <Checkbox
              isSelected={item.selected}
              onChange={() =>
                dispatch({ type: HANDLE_ITEM_SELECTED, payload: item })
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
                  <BodyText
                    type="sr"
                    title="Draft"
                    color={COLORS.primary_base}
                  />
                </div>
              )}
            </Checkbox>
          </div>
          <BodyText
            type="mr"
            title={"FCFA" + item.price}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <BodyText
            type="mr"
            title={item.stock+" in stock"}
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

  if (type === "customerList") {
    return (
      <div onClick={() => handleClick("customerDetails")} className="clickable">
        <div className="linear-layout-flat">
          <BodyText
            type="mr"
            title={item.customerName}
            color={COLORS.grayscale_900}
            className="customer-fixed-width"
          />
          <BodyText
            type="mr"
            title={"FCFA " + item.totalSpent}
            color={COLORS.grayscale_900}
            className="customer-fixed-width"
          />
          <BodyText
            type="mr"
            title={item.orders}
            color={COLORS.grayscale_900}
            className="customer-fixed-width"
            style={{ textAlign: "right" }}
          />
        </div>
        <Divider style={{ marginTop: 16 }} />
      </div>
    );
  }

  if (type === "orderList") {
    return (
      <div className="order-item" onClick={() => handleClick("")}>
        <div className="linear-layout-flat">
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title={item.id}
            className="order-fix-width"
          />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title={item.date}
            className="order-fix-width"
          />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title={item.customerName}
            className="order-fix-width"
          />
          {item.fullF ? <FullFilled /> : <UnFullFilled />}
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title={"FCFA" + item.total}
            className="order-fix-width"
            style={{ textAlign: "right" }}
          />
        </div>
        <Divider />
      </div>
    );
  }

  if (type === "catList") {
    return (
      <div>
        <div
          className={
            item.selected
              ? "linear-layout-flat item-list-active"
              : "linear-layout-flat"
          }
        >
          <div className="itemList-checkbox">
            <Checkbox
              isSelected={item.selected}
              onChange={() =>
                dispatch({ type: HANDLE_CAT_ITEM_SELECT, payload: item })
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
                  <BodyText
                    type="sr"
                    title="Draft"
                    color={COLORS.primary_base}
                  />
                </div>
              )}
            </Checkbox>
          </div>
          <BodyText
            type="mr"
            title={item.slug}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <BodyText
            type="mr"
            title={item.items}
            color={COLORS.grayscale_900}
            style={{ marginLeft: 20 }}
          />
          <div style={{ position: "relative" }}>
            <VerticalDots
              aria-label="v-dots"
              onClick={() =>
                dispatch({ type: HANDLE_DROPDOWN_CAT_ITEM, payload: item.id })
              }
            />
            {item.visible && (
              <Dropdown item={item} itemEdit data={ITEM_CAT_ACTIONS} cat />
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
