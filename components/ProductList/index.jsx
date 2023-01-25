import React from "react";

// comp
import { Checkbox, Spacer } from "@nextui-org/react";
import { BodyText, Dropdown } from "..";

// assets
import {
  CLOSE_ALL_CHECKER,
  HANDLE_ITEMS_SELECTED,
  HANDLE_ITEM_SELECTED,
  HANDLE_MODAL_VISIBLE,
  OPEN_ALL_CHECKER,
} from "../../constants";
import VerticalDots from "../../public/VerticalDots.svg";
import { COLORS } from "../../assets/colors";
import { ITEM_ACTIONS } from "../../helpers";

const ProductList = ({
  data,
  tableHeaderTitle,
  tableHeaderOne,
  tableHeaderTwo,
  dispatch,
  allChecker,
}) => {
  const handleChange = () => {
    dispatch({ type: HANDLE_ITEMS_SELECTED });
    if (allChecker) {
      dispatch({ type: CLOSE_ALL_CHECKER });
      return;
    }
    dispatch({ type: OPEN_ALL_CHECKER });
  };

  return (
    <div>
      <Spacer y={2} />
      <table>
        <tr>
          <th>
            <Checkbox isSelected={allChecker} onChange={handleChange} />
          </th>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderTitle}
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderOne}
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderTwo}
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th></th>
        </tr>
        {data.map((item) => (
          <tr
            key={item.id}
            className={
              item.selected
                ? "item-list-active"
                : ""
            }
          >
            <td>
              <Checkbox
                isSelected={item.selected}
                onChange={() =>
                  dispatch({ type: HANDLE_ITEM_SELECTED, payload: item })
                }
              />
            </td>
            <td>
              <div className="product-list-row">
                <img
                  src={item.image}
                  alt="res"
                  className="product-item-search"
                />
                <BodyText
                  type="mr"
                  title={item.title}
                  color={COLORS.grayscale_900}
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
              </div>
            </td>

            <td>
              <BodyText
                type="mr"
                title={"FCFA" + item.price}
                color={COLORS.grayscale_900}
              />
            </td>
            <td>
              <div>
                <BodyText
                  type="mr"
                  title={item.stock + " in stock"}
                  color={COLORS.grayscale_900}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <VerticalDots
                  aria-label="v-dots"
                  onClick={() =>
                    dispatch({
                      type: HANDLE_MODAL_VISIBLE,
                      payload: item.id,
                    })
                  }
                />
                {item.visible && (
                  <Dropdown item={item} itemEdit data={ITEM_ACTIONS} />
                )}
              </div>
            </td>
          </tr>
        ))}
        <Spacer y={2.5} />
      </table>
    </div>
  );
};

export default ProductList;
