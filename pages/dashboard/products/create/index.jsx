import React, { useState } from "react";

// comp
import {
  BodyText,
  Button,
  DashboardContainer,
  HeadingText,
  InputField,
  Modal,
  TipTap,
} from "../../../../components";
import { Checkbox, Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../assets/colors";
import { FormControl, MenuItem, Select } from "@mui/material";
import PurplePlus from "../../../../public/purple-plus.svg";
import Trash from "../../../../public/covered-trash.svg";
import FileContainer from "../../../../components/FileContainer";

const Products = () => {
  const [select, setSelect] = useState({
    status: "publish",
    weight: "Less-than-1-kg",
  });
  const [inputs, setInputs] = useState({
    products: "",
    tags: "",
    inventory: "",
    title: "",
    price: "",
    salePrice: "",
    attribute: "",
    desc: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputs = (e, input) => {
    input
      ? setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        })
      : setSelect((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
  };

  return (
    <DashboardContainer>
      <Modal
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        firstBtnTitle="Leave"
        secondBtnTitle="Save Changes"
        modalTitle="You have unsaved changes"
        modalBodyTextOne="Are you sure you want to leave ?"
        sndBtnClassName="purpleBtn"
        firstBtnClassName="purpleBtnOutline"
        firstBtnTitleColor={COLORS.primary_base}
        sndBtnTitleColor={COLORS.white}
        dashboard
      />
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          {/* Page description */}
          <div className="linear-layout-flat">
            <HeadingText
              type="h3"
              title="Create product"
              color={COLORS.grayscale_900}
              style={{ marginRight: 20 }}
            />
            <div className="linear-layout">
              <Button
                className="product-selected-btn-outline"
                onClick={() => setModalVisible(true)}
                title="Back"
                titleType="lr"
                titleColor={COLORS.primary_base}
              />

              <Button
                className="product-selected-btn-outline"
                onClick={() => setModalVisible(true)}
                title="Delete"
                titleType="lr"
                titleColor={COLORS.white}
                style={{ backgroundColor: COLORS.primary_base }}
              />
            </div>
          </div>

          <Divider className="divider-item" />

          {/* Page Content */}
          <div className="inputs-container">
            <div className="create-left-container">
              {/* title */}
              <InputField
                ariaLabel="title"
                label="Title"
                placeholder="Product name"
                name="title"
                className="tags"
                type="text"
                value={inputs.title}
                onChange={(e) => handleInputs(e, true)}
              />
              <Spacer />

              {/* Text editor */}
              <BodyText
                type="mr"
                title="Description"
                color={COLORS.grayscale_900}
              />
              <TipTap
                value={inputs.desc}
                onChange={(e) =>
                  handleInputs({ ...inputs, desc: e.target.value })
                }
                editor
              />

              <Spacer />
              {/* Media file */}

              <FileContainer />

              {/* Price & sale */}
              <div className="linear-layout-flat">
                <InputField
                  ariaLabel="price"
                  label="Price"
                  placeholder="0"
                  name="price"
                  className="price"
                  type="text"
                  value={inputs.price}
                  onChange={(e) => handleInputs(e, true)}
                />
                <InputField
                  ariaLabel="salePrice"
                  label="Sale price"
                  placeholder="0"
                  name="salePrice"
                  className="price"
                  type="text"
                  value={inputs.salePrice}
                  onChange={(e) => handleInputs(e, true)}
                />
              </div>
              <Spacer />

              {/* Variation & add option */}
              <div className="linear-layout-flat">
                <BodyText
                  type="mr"
                  title="Variation"
                  color={COLORS.grayscale_900}
                />

                <div className="linear-layout">
                  <PurplePlus aria-label="purple-plus" />
                  <BodyText
                    type="mr"
                    title="Add option"
                    color={COLORS.primary_base}
                  />
                </div>
              </div>

              <Spacer />
              <Checkbox>
                <BodyText
                  type="mr"
                  title="This product is variable: has different colors, size, weight, etc."
                  color={COLORS.grayscale_900}
                />
              </Checkbox>
              <Spacer />

              {/* attr1 */}
              <div className="linear-layout-flat">
                <InputField
                  ariaLabel="attr1"
                  label="Attribute 1"
                  placeholder="0"
                  name="attr1"
                  className="attr"
                  type="text"
                  value={"size"}
                  onChange={(e) => {}}
                />
                <InputField
                  ariaLabel="attr1Val"
                  label="Value"
                  placeholder="Write values and press enter"
                  name="tags"
                  className="attr"
                  type="text"
                  value={inputs.salePrice}
                  onChange={(e) => handleInputs(e, true)}
                />
                <Trash aria-label="trash" className="trash" />
              </div>
            </div>

            <div className="create-right-container">
              <BodyText type="mr" title="Status" color={COLORS.grayscale_900} />
              <FormControl className="status">
                <Select
                  value={select.status}
                  onChange={(e) => handleInputs(e, false)}
                  className="select-status-text"
                  name="status"
                >
                  <MenuItem value="publish">Publish</MenuItem>
                  <MenuItem value="draft">Draft</MenuItem>
                  <MenuItem value="hidden">Hidden</MenuItem>
                </Select>
              </FormControl>

              <Spacer y={0.5} />
              <InputField
                ariaLabel="category"
                label="Categories"
                placeholder="Search for categories"
                name="products"
                className="categories"
                type="text"
                value={inputs.products}
                onChange={(e) => handleInputs(e, true)}
              />

              <Spacer y={0.5} />
              <InputField
                ariaLabel="tags"
                label="Tags"
                placeholder="Tshirt, Oversize, Black, etc..."
                name="tags"
                className="tags"
                type="text"
                value={inputs.tags}
                onChange={(e) => handleInputs(e, true)}
              />

              <Spacer y={0.5} />
              <InputField
                ariaLabel="inventory"
                label="Inventory"
                placeholder="Quantity in stock"
                name="inventory"
                className="inventory"
                type="text"
                value={inputs.inventory}
                onChange={(e) => handleInputs(e, true)}
              />
              <Spacer y={0.5} />
              <BodyText type="mr" title="Weight" color={COLORS.grayscale_900} />
              <FormControl className="status">
                <Select
                  value={select.weight}
                  onChange={(e) => handleInputs(e, false)}
                  className="select-status-text"
                  name="weight"
                >
                  <MenuItem value="Less-than-1-kg">Less than 1 kg</MenuItem>
                  <MenuItem value="1kg-5kg">1kg - 5kg</MenuItem>
                  <MenuItem value="5kg-10kg">5kg - 10kg</MenuItem>
                  <MenuItem value="More-than-10kg">More than 10kg</MenuItem>
                </Select>
              </FormControl>

              <Spacer y={0.5} />
              <BodyText
                type="mr"
                title="Fragile"
                color={COLORS.grayscale_900}
              />
              <Checkbox>
                <BodyText
                  type="mr"
                  title="Mark this product as fragile"
                  color={COLORS.grayscale_900}
                />
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 100 }} />
    </DashboardContainer>
  );
};

export default Products;
