import React, { useState } from "react";
// import { STORES, USERS } from "../../constants";
// import { AuthContext } from "../../context/Auth";
// import firebase from "../../firebase.config";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router"

// comp
import {
  BodyText,
  DashboardContainer,
  FilterBtn,
  HeadingText,
  InputField,
  Modal,
  ProductListItem,
} from "../../../components";

// assets
import { COLORS } from "../../../assets/colors";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import Plus from "../../../public/Plus.svg";

const Products = () => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  return (
    <DashboardContainer>
      <Modal
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        modalTitle='Remove "Sofas"?'
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
      />
      <Modal
        closeModal={() => setModalVisibleTwo(false)}
        visible={modalVisibleTwo}
        modalTitle='Remove 7 selected products?'
        modalBodyTextOne="Removed products can't be restored."
        modalBodyTextTwo="Products with order and cart history won't be deleted"
        dashboard
      />
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <div className="linear-layout-flat">
            <div className="linear-layout">
              <HeadingText
                type="h3"
                title="Products"
                color={COLORS.grayscale_900}
                style={{ marginRight: 20 }}
              />
              <HeadingText type="h3" title="7" color={COLORS.grayscale_500} />
            </div>
            <Button
              icon={<Plus aria-label="plus" />}
              style={{
                backgroundColor: COLORS.primary_base,
                width: 175,
                height: 50,
                borderRadius: 4,
              }}
            >
              <BodyText type="lr" title="Create product" color={COLORS.white} />
            </Button>
          </div>

          <div className="linear-layout-flat" style={{ marginTop: 70 }}>
            <InputField
              type="text"
              name="products"
              placeholder="Search products"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              ariaLabel="search-p"
              className="search-product"
            />
            <FilterBtn title="Show all products" />
            <FilterBtn title="Sort by last updated" />
          </div>

          <div className="linear-layout-flat" style={{ marginTop: 50 }}>
            <Checkbox>
              <BodyText
                type="mr"
                title="Displaying: 7 of 7 items"
                color={COLORS.grayscale_900}
              />
            </Checkbox>
            <BodyText type="mr" title="Price" color={COLORS.grayscale_900} />
            <BodyText
              type="mr"
              title="Inventory"
              color={COLORS.grayscale_900}
            />
            <div />
          </div>

          <Divider className="divider-item" />

          <ProductListItem
            type="search-p"
            onClick={() => setModalVisible(true)}
          />
          <ProductListItem
            type="search-p"
            onClick={() => setModalVisibleTwo(true)}
          />
          <ProductListItem type="search-p" draft />
          <ProductListItem type="search-p" />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Products;
