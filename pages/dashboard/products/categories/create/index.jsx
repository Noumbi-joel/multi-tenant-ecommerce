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
} from "../../../../../components";
import { Checkbox, Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../../assets/colors";
import { FormControl, MenuItem, Select } from "@mui/material";
import PurplePlus from "../../../../../public/purple-plus.svg";
import Trash from "../../../../../public/covered-trash.svg";
import FileContainer from "../../../../../components/FileContainer";

const Categories = () => {
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
              title="Create category"
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
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 100 }} />
    </DashboardContainer>
  );
};

export default Categories;
