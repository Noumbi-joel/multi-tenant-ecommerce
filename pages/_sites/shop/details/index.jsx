import React from "react";

// comp
import {
  BodyText,
  HeadingText,
  SFContainer,
  SFDrawerContainer,
  SFFooter,
  SFSectionTexts,
  Select,
  Button,
  SFListNewCollection,
} from "../../../../components";
import { Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../assets/colors";
import { PRODUCTS, SF_CATEGORIES, SF_COLORS, SF_SIZES } from "../../../../helpers";
import { useRouter } from "next/router";

const SFShopDetails = () => {
  const router = useRouter();
  return (
    <SFDrawerContainer>
      <SFContainer />
      <Divider className="sf-divider" />
      <SFContainer fluid>
        <SFSectionTexts
          title="Flared mini skirt"
          msg="Home / Shop / Clothing / Flared mini skirt"
        />
        <Spacer y={2} />
        <div className="sf-details-content">
          <div className="sf-details-img-column">
            <img
              src="/model-banner.png"
              alt="img-desc"
              className="sf-img-details"
            />
            <img
              src="/model-banner.png"
              alt="img-desc"
              className="sf-img-details"
            />
            <img
              src="/model-banner.png"
              alt="img-desc"
              className="sf-img-details"
            />
          </div>
          <div>
            <div className="sf-img-details-f-container">
              <img
                src="/model-banner.png"
                alt="img-desc"
                className="sf-img-details-full"
              />
            </div>
          </div>
          <form className="sf-details-form">
            <HeadingText type="h4" title="FCFA 390,000" color="#121212" />
            <Spacer />
            <Select
              type="sf-select"
              data={SF_COLORS}
              className="sf-select-filter-drawer"
            />
            <Spacer />
            <Select
              type="sf-select"
              data={SF_SIZES}
              className="sf-select-filter-drawer"
            />
            <Spacer />
            <div className="sf-form-addToCart-row">
              <input
                type="number"
                onChange={() => {}}
                className="sf-form-nbItem"
              />
              <Button
                titleType="lr"
                titleColor={COLORS.white}
                title="Add to cart"
                onClick={() => {}}
                className="sf-addToCart"
              />
            </div>
            <Spacer />
            <BodyText
              type="lr"
              title="Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 2 designs: Bo Ivy and Bo Soft Strap, two sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process."
              color="#121212"
            />
          </form>
        </div>

        <Spacer />
        <div>
          <HeadingText
            type="h3"
            title="You may also like"
            color="#121212"
            style={{ textAlign: "center" }}
          />
          <SFListNewCollection data={PRODUCTS.slice(0, 4)} router={router} />
        </div>
      </SFContainer>
      <Spacer y={2} />
      <SFFooter />
    </SFDrawerContainer>
  );
};

export default SFShopDetails;
