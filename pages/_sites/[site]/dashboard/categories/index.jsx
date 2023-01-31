import React, { useState } from "react";

// comp
import {
  BodyText,
  Button,
  CategoryList,
  DashboardContainer,
  Empty,
  HeadingText,
  Modal,
  SearchFilter,
} from "../../../../../components";

// functions
import {
  handleDeleteAllItemsCat,
  handleDiscardCat,
  searchFilter,
} from "../../../../../functions";

// assets
import { COLORS } from "../../../../../assets/colors";
import Plus from "../../../../../public/plus.svg";
import Trash from "../../../../../public/trash.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_ALL_SELECTED_MODAL_CAT,
  DELETE_CAT_ITEM,
  CLOSE_SINGLE_MODAL_CAT,
  OPEN_MODAL_ALL_ITEMS_CAT,
} from "../../../../../constants";
import { Spacer } from "@nextui-org/react";

const Categories = () => {
  const { filteredCategories, categories, itemsSelected } = useSelector(
    (state) => state.categories
  );

  const { modalSingleItemCat, modalAllItemCat, allCheckerCat, itemName } =
    useSelector((state) => state.modal);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <DashboardContainer>
      <Modal
        closeModal={() => dispatch({ type: CLOSE_ALL_SELECTED_MODAL_CAT })}
        deleteItem={() => handleDeleteAllItemsCat(dispatch)}
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
                  router.push("/dashboard/categories/create")
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
                  onClick={() => handleDiscardCat(dispatch, allCheckerCat)}
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
              link="/dashboard/product/create"
            />
          ) : (
            <div>
              <Spacer />
              <CategoryList
                tableHeaderTitle={`Displaying: ${filteredCategories.length} of ${filteredCategories.length} items`}
                tableHeaderOne="Slug"
                tableHeaderTwo="Items"
                data={filteredCategories}
                dispatch={dispatch}
                allChecker={allCheckerCat}
              />
            </div>
          )}
        </div>
      </div>
      <Spacer y={2.5} />
    </DashboardContainer>
  );
};

export default Categories;
