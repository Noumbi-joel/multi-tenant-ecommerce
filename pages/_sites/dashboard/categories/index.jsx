import React, { useState } from "react";

// comp
import {
  BodyText,
  Button,
  DashboardContainer,
  Empty,
  HeadingText,
  Modal,
  SearchFilter,
  Table,
} from "../../../../components";

// assets
import { COLORS } from "../../../../assets/colors";
import Plus from "../../../../public/plus.svg";
import Trash from "../../../../public/trash.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../../../../functions";
import {
  CLOSE_ALL_CAT_CHECKER,
  CLOSE_ALL_SELECTED_MODAL_CAT,
  DELETE_CAT_ITEM,
  CLOSE_SINGLE_MODAL_CAT,
  DELETE_CAT_ITEMS,
  DISCARD_CAT_ITEMS_SELECTED,
  OPEN_MODAL_ALL_ITEMS_CAT,
} from "../../../../constants";

const Categories = () => {
  const { filteredCategories, categories, itemsSelected } = useSelector(
    (state) => state.categories
  );

  const { modalSingleItemCat, modalAllItemCat, allCheckerCat, itemName } =
    useSelector((state) => state.modal);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDiscard = () => {
    dispatch({ type: DISCARD_CAT_ITEMS_SELECTED });
    if (allCheckerCat) {
      dispatch({ type: CLOSE_ALL_CAT_CHECKER });
    }
  };

  const handleDeleteAllItems = () => {
    dispatch({ type: DELETE_CAT_ITEMS });
    dispatch({ type: CLOSE_ALL_SELECTED_MODAL_CAT });
    dispatch({ type: CLOSE_ALL_CAT_CHECKER });
  };

  return (
    <DashboardContainer>
      <Modal
        closeModal={() => dispatch({ type: CLOSE_ALL_SELECTED_MODAL_CAT })}
        deleteItem={handleDeleteAllItems}
        visible={modalAllItemCat}
        modalTitle={`Remove ${itemsSelected.length} selected categories`}
        modalBodyTextOne="Removed categories can't be restored."
        dashboard
        remove
      />
      <Modal
        closeModal={() => dispatch({ type: CLOSE_SINGLE_MODAL_CAT })}
        deleteItem={() => {
          dispatch({ type: DELETE_CAT_ITEM });
          dispatch({ type: CLOSE_SINGLE_MODAL_CAT });
        }}
        visible={modalSingleItemCat}
        modalTitle={`Remove ${itemName}?`}
        modalBodyTextOne="Removed categories can't be restored."
        dashboard
        remove
      />
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          {/* Page description */}
          <div className="linear-layout-flat">
            <div className="linear-layout">
              <HeadingText
                type="h3"
                title="Categories"
                color={COLORS.grayscale_900}
                style={{ marginRight: 20 }}
              />
              <HeadingText
                type="h3"
                title="0"
                color={COLORS.grayscale_500}
                style={{ marginRight: 20 }}
              />
            </div>
            {itemsSelected.length <= 0 && (
              <Button
                className="cat-btn"
                title="Create category"
                titleType="lr"
                titleColor={COLORS.white}
                style={{ backgroundColor: COLORS.primary_base }}
                onClick={() =>
                  router.push("/_sites/dashboard/categories/create")
                }
              >
                <Plus aria-label="plus" className="plus" />
              </Button>
            )}
            {itemsSelected.length > 0 && (
              <div className="linear-layout">
                <BodyText
                  type="lr"
                  title={`${itemsSelected.length} selected`}
                  color={COLORS.grayscale_900}
                  style={{ marginRight: 20 }}
                />

                <Button
                  className="product-selected-btn-outline"
                  onClick={handleDiscard}
                  title="Discard"
                  titleColor={COLORS.primary_base}
                  titleType="lr"
                />

                <Button
                  className="product-selected-btn"
                  onClick={() => dispatch({ type: OPEN_MODAL_ALL_ITEMS_CAT })}
                  title="Delete"
                  titleColor={COLORS.white}
                  titleType="lr"
                >
                  <Trash aria-label="trash" />
                </Button>
              </div>
            )}
          </div>
          <SearchFilter
            value={search}
            cat
            onChange={(e) =>
              searchFilter(
                e,
                "categories",
                categories,
                filteredCategories,
                setSearch,
                dispatch
              )
            }
            type="categories"
            dispatch={dispatch}
            searchType="categories"
          />

          {filteredCategories.length <= 0 ? (
            <Empty
              emptyConcern="categories"
              msg="Create categories to group similar products in your store."
              btnTitle="Add collection"
              link="/_sites/dashboard/product/create"
            />
          ) : (
            <div>
              <Table
                tableHeaderTitle={`Displaying: ${filteredCategories.length} of ${filteredCategories.length} items`}
                tableHeaderOne="Slug"
                tableHeaderTwo="Items"
                data={filteredCategories}
                dispatch={dispatch}
                allChecker={allCheckerCat}
                cat
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: 100 }} />
    </DashboardContainer>
  );
};

export default Categories;
