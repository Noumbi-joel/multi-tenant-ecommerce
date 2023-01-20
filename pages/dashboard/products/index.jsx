import React, { useState } from "react";
import { useRouter } from "next/router";

// comp
import {
  BodyText,
  Button,
  DashboardContainer,
  HeadingText,
  Modal,
  SearchFilter,
  Table,
} from "../../../components";

// redux
import { useDispatch, useSelector } from "react-redux";

// assets
import { COLORS } from "../../../assets/colors";
import Plus from "../../../public/plus.svg";
import Trash from "../../../public/trash.svg";
import {
  CLOSE_ALL_CHECKER,
  DISCARD_ITEM_SELECTED,
  FILTERING,
  CLOSE_ALL_SELECTED_MODAL,
  DELETE_ITEMS,
  CLOSE_SINGLE_MODAL,
  DELETE_ITEM,
  OPEN_ALL_ITEM_MODAL,
} from "../../../constants";
import { searchFilter } from "../../../functions";

const Products = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { products, filteredProducts, itemsSelected } = useSelector(
    (state) => state.products
  );
  const { modalSingleItem, itemName, modalAllItem, allChecker } = useSelector(
    (state) => state.modal
  );

  const handleDiscard = () => {
    dispatch({ type: DISCARD_ITEM_SELECTED });
    if (allChecker) {
      dispatch({ type: CLOSE_ALL_CHECKER });
    }
  };

  const handleDeleteItems = () => {
    dispatch({ type: OPEN_ALL_ITEM_MODAL });
  };

  const handleDeleteAllItems = () => {
    dispatch({ type: DELETE_ITEMS });
    dispatch({ type: CLOSE_ALL_SELECTED_MODAL });
    dispatch({ type: CLOSE_ALL_CHECKER });
  };

  return (
    <DashboardContainer>
      <Modal
        closeModal={() => dispatch({ type: CLOSE_SINGLE_MODAL })}
        deleteItem={() => {
          dispatch({ type: DELETE_ITEM });
          dispatch({ type: CLOSE_SINGLE_MODAL });
        }}
        visible={modalSingleItem}
        modalTitle={`Remove "${itemName}"?`}
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
        remove
      />
      <Modal
        closeModal={() => dispatch({ type: CLOSE_ALL_SELECTED_MODAL })}
        deleteItem={handleDeleteAllItems}
        visible={modalAllItem}
        modalTitle={`Remove ${itemsSelected.length} items selected`}
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
        remove
      />
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <div className="linear-layout-flat">
            {/* Page description */}
            <div className="linear-layout">
              <HeadingText
                type="h3"
                title="Products"
                color={COLORS.grayscale_900}
                style={{ marginRight: 20 }}
              />
              <HeadingText
                type="h3"
                title={filteredProducts.length}
                color={COLORS.grayscale_500}
              />
            </div>
            {itemsSelected.length <= 0 && (
              <Button
                className="create-prod"
                onClick={() => router.push("/dashboard/products/create")}
                title="Create product"
                titleColor={COLORS.white}
                titleType="lr"
              >
                <Plus className="plus" aria-label="plus" />
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
                  onClick={handleDeleteItems}
                  title="Delete"
                  titleColor={COLORS.white}
                  titleType="lr"
                >
                  <Trash aria-label="trash" />
                </Button>
              </div>
            )}
          </div>

          {/* Search input & actions */}
          <SearchFilter
            type="products"
            value={search}
            onChange={(e) =>
              searchFilter(
                e,
                "products",
                products,
                filteredProducts,
                setSearch,
                dispatch
              )
            }
            dispatch={dispatch}
            searchType="products"
          />

          <Table
            tableHeaderTitle={`Displaying ${filteredProducts.length} of ${filteredProducts.length} items`}
            tableHeaderOne="Price"
            tableHeaderTwo="Inventory"
            productList
            data={filteredProducts}
            dispatch={dispatch}
            allChecker={allChecker}
          />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Products;
