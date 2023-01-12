import React, { useState } from "react";

// comp
import {
  BodyText,
  DashboardContainer,
  FilterBtn,
  HeadingText,
  InputField,
  Modal,
  ProductListItem,
} from "../../../../components";
import { Button, Checkbox, Divider } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../assets/colors";
import Plus from "../../../../public/Plus.svg";
import { PRODUCT_ITEM } from "../../../../helpers";
import Trash from "../../../../public/trash.svg";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectProd, setSelectProd] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <DashboardContainer>
      <Modal
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        productEdit
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
            {!selectProd && (
              <Button
                icon={<Plus aria-label="plus" />}
                style={{
                  backgroundColor: COLORS.primary_base,
                  width: 175,
                  height: 50,
                  borderRadius: 4,
                }}
              >
                <BodyText
                  type="lr"
                  title="Create product"
                  color={COLORS.white}
                />
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
                <div className="product-selected-btn-outline">
                  <BodyText
                    type="lr"
                    title="Discard"
                    color={COLORS.primary_base}
                  />
                </div>
                <div
                  onClick={() => setSelectProd(false)}
                  className="product-selected-btn"
                >
                  <Trash aria-label="trash" />
                  <BodyText type="lr" title="Delete" color={COLORS.white} />
                </div>
              </div>
            )}
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
            <FilterBtn type="filter" title="Show all products" />
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

          {PRODUCT_ITEM.map((p, i) => (
            <ProductListItem
              key={p.id}
              type="search-p"
              image={p.image}
              price={p.price}
              stock={p.stock}
              title={p.title}
              draft={i === 2 && true}
              onClick={() => setModalVisible(true)}
            />
          ))}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Products;
