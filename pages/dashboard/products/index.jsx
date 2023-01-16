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

// assets
import { COLORS } from "../../../assets/colors";
import Plus from "../../../public/Plus.svg";
import Trash from "../../../public/trash.svg";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectProd, setSelectProd] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  return (
    <DashboardContainer>
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
              <HeadingText type="h3" title="7" color={COLORS.grayscale_500} />
            </div>
            {!selectProd && (
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
            {selectProd && (
              <div
                className="linear-layout"
                onClick={() => setSelectProd(false)}
              >
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

          {/* Search input & actions */}
          <SearchFilter
            value={search}
            filterTitle="Show all products"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table
            tableHeaderTitle="Displaying: 7 of 7 items"
            tableHeaderOne="Price"
            tableHeaderTwo="Inventory"
            productList
          />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Products;

/**<Modal
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        modalTitle='Remove "Sofas"?'
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
        firstBtn="Cancel"
        secondBtn="Delete"
        firstBtnStyle={{ backgroundColor: COLORS.grayscale_400, borderRadius: 4 }}
        secondBtnStyle={{ backgroundColor: COLORS.danger_base, borderRadius: 4 }}
      />
      <Modal
        closeModal={() => setModalVisibleTwo(false)}
        visible={modalVisibleTwo}
        modalTitle="Remove 7 selected products?"
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
        firstBtn="Cancel"
        secondBtn="Delete"
        firstBtnStyle={{ backgroundColor: COLORS.grayscale_400, borderRadius: 4 }}
        secondBtnStyle={{ backgroundColor: COLORS.danger_base, borderRadius: 4 }}
      /> */
