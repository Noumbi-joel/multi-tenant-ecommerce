import React, { useState } from "react";

// comp
import {
  BodyText,
  Button,
  DashboardContainer,
  HeadingText,
  InputField,
  Modal,
  SearchFilter,
  Table,
  TipTap,
} from "../../../../components";
import { Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../assets/colors";
import Plus from "../../../../public/plus.svg";
import Trash from "../../../../public/trash.svg";
import PurplePlus from "../../../../public/purple-plus.svg";
import Alien from "../../../../public/alien.svg";
import { useRouter } from "next/router";

const Categories = () => {
  const [empty, setEmpty] = useState(true);
  const [selectProd, setSelectProd] = useState(true);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <DashboardContainer>
      <Modal
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        firstBtnTitle="Cancel"
        secondBtnTitle="Delete"
        modalTitle="Remove 2 selected categorie(s) ?"
        modalBodyTextOne="Removed categories can't be restored."
        sndBtnClassName="redBtn"
        firstBtnClassName="grayBtn"
        firstBtnTitleColor={COLORS.grayscale_900}
        sndBtnTitleColor={COLORS.white}
        dashboard
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
            {!selectProd && (
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
            {selectProd && (
              <div
                className="linear-layout"
                onClick={() => {
                  setSelectProd(false);
                  setEmpty(!empty);
                }}
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

          {empty ? (
            <div className="no-category">
              <Alien aria-label="alien" />
              <div>
                <BodyText
                  type="lr"
                  title="Whoops.. you've got no categories"
                  color={"#000"}
                  style={{ textAlign: "center" }}
                />
                <BodyText
                  type="mr"
                  title="Create categories to group similar products in your store."
                  color={"#000"}
                  style={{ textAlign: "center" }}
                />
              </div>
              <div className="linear-layout" style={{ marginTop: 25 }}>
                <PurplePlus aria-label="plus" className="plus" />
                <BodyText
                  type="lr"
                  title="Add collection"
                  color={COLORS.primary_base}
                  style={{ textAlign: "center" }}
                />
              </div>
            </div>
          ) : (
            <div>
              <SearchFilter
                value={search}
                cat
                onChange={(e) => setSearch(e.target.value)}
                filterTitle="Show all categories"
              />
              <Table
                tableHeaderTitle="Displaying: 2 of 2 items"
                tableHeaderOne="Slug"
                tableHeaderTwo="Items"
                onClick={() => setModalVisible(true)}
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
