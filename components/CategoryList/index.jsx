import React from "react";

// comp
import { Checkbox, Spacer } from "@nextui-org/react";
import { BodyText,Dropdown } from "..";

// assets
import { COLORS } from "../../assets/colors";
import {
  CLOSE_ALL_CAT_CHECKER,
  HANDLE_CAT_ITEM_SELECT,
  HANDLE_DROPDOWN_CAT_ITEM,
  HANDLE_ITEMS_CAT_SELECTED,
  OPEN_ALL_CAT_CHECKER,
} from "../../constants";
import { ITEM_CAT_ACTIONS } from "../../helpers";
import VerticalDots from "../../public/VerticalDots.svg";

const CategoryList = ({
  data,
  tableHeaderTitle,
  tableHeaderOne,
  tableHeaderTwo,
  dispatch,
  allChecker,
}) => {
  const handleChangeCat = () => {
    dispatch({ type: HANDLE_ITEMS_CAT_SELECTED });
    if (allChecker) {
      dispatch({ type: CLOSE_ALL_CAT_CHECKER });
      return;
    }
    dispatch({ type: OPEN_ALL_CAT_CHECKER });
  };
  return (
    <div>
      <Spacer y={2} />
      <table>
        <tr>
          <th>
            <Checkbox isSelected={allChecker} onChange={handleChangeCat} />
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
                  dispatch({ type: HANDLE_CAT_ITEM_SELECT, payload: item })
                }
              />
            </td>
            <td>
              <div className="category-list-row">
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
                title={item.slug}
                color={COLORS.grayscale_900}
              />
            </td>
            <td>
              <BodyText
                type="mr"
                title={item.items}
                color={COLORS.grayscale_900}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <VerticalDots
                  aria-label="v-dots"
                  onClick={() =>
                    dispatch({
                      type: HANDLE_DROPDOWN_CAT_ITEM,
                      payload: item.id,
                    })
                  }
                />
                {item.visible && (
                  <Dropdown item={item} itemEdit data={ITEM_CAT_ACTIONS} cat />
                )}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CategoryList;
