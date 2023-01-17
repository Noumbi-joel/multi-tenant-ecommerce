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
import Plus from "../../../../public/Plus.svg";
import Trash from "../../../../public/trash.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const { filteredCategories, categories, itemsSelected } = useSelector(
    (state) => state.categories
  );

  const { modalSingleItemCat, modalAllItemCat, allCheckerCat } = useSelector(
    (state) => state.modal
  );

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <DashboardContainer>
      <Modal
        closeModal={() => {}}
        visible={modalSingleItemCat}
        modalTitle="Remove 2 selected categorie(s) ?"
        modalBodyTextOne="Removed categories can't be restored."
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
                  router.push("/dashboard/products/categories/create")
                }
              >
                <Plus aria-label="plus" className="plus" />
              </Button>
            )}
            {itemsSelected.length > 0 && (
              <div className="linear-layout" onClick={() => {}}>
                <BodyText
                  type="lr"
                  title="7 selected"
                  color={COLORS.grayscale_900}
                  style={{ marginRight: 20 }}
                />

                <Button
                  className="product-selected-btn-outline"
                  onClick={() => {}}
                  title="Discard"
                  titleColor={COLORS.primary_base}
                  titleType="lr"
                />

                <Button
                  className="product-selected-btn"
                  onClick={() => setSelectProd(false)}
                  title="Delete"
                  titleColor={COLORS.white}
                  titleType="lr"
                >
                  <Trash aria-label="trash" />
                </Button>
              </div>
            )}
          </div>

          {filteredCategories.length <= 0 ? (
            <Empty
              emptyConcern="categories"
              msg="Create categories to group similar products in your store."
              btnTitle="Add collection"
            />
          ) : (
            <div>
              <SearchFilter
                value={search}
                cat
                onChange={(e) => setSearch(e.target.value)}
              />
              <Table
                tableHeaderTitle={`Displaying: ${filteredCategories.length} of ${filteredCategories.length} items`}
                tableHeaderOne="Slug"
                tableHeaderTwo="Items"
                data={filteredCategories}
                dispatch={dispatch}
                allCheckerCat={allCheckerCat}
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
