import React, { useState } from "react";

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
  SFDetailsImg,
} from "../../../../../components";
import { Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../../../../assets/colors";
import {
  PRODUCTS,
  SF_COLORS,
  SF_PROD_IMG_DETAILS,
  SF_SIZES,
} from "../../../../../helpers";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { SET_CART_QTY } from "../../../../../constants";
import { server } from "../../../../../config";

const SFShopDetails = ({ foundProduct, products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems, showCart, totalQuantities, qty } = useSelector(
    (state) => state.cart
  );
  return (
    <SFDrawerContainer>
      <SFContainer />
      <Divider className="sf-divider" />
      <SFContainer fluid>
        <SFSectionTexts
          title={foundProduct?.title}
          msg={`Home / Shop / ${foundProduct?.category} / ${foundProduct?.title}`}
        />
        <Spacer y={2} />
        <div className="sf-details-content">
          <SFDetailsImg
            imageDetails={[...foundProduct?.images]}
            fullImage={foundProduct?.image}
          />
          <form className="sf-details-form">
            <HeadingText
              type="h4"
              title={"FCFA " + foundProduct?.price}
              color="#121212"
            />
            <Spacer />
            {foundProduct?.colors?.length > 0 && (
              <Select
                type="sf-select"
                data={foundProduct?.colors}
                className="sf-select-filter-drawer"
                onChange={(e) => console.log(e.target.value)}
              />
            )}

            <Spacer />
            {foundProduct?.sizes?.length > 0 && (
              <Select
                type="sf-select"
                data={foundProduct?.sizes}
                className="sf-select-filter-drawer"
                onChange={(e) => console.log(e.target.value)}
              />
            )}
            <Spacer />
            <div className="sf-form-addToCart-row">
              <input
                type="number"
                min="0"
                value={qty}
                onChange={(e) =>
                  dispatch({ type: SET_CART_QTY, payload: e.target.value })
                }
                className="sf-form-nbItem"
              />
              <Button
                titleType="lr"
                titleColor={COLORS.white}
                title="Add to cart"
                onClick={() => router.push("/checkout")}
                className="sf-addToCart"
              />
            </div>
            <Spacer />
            <BodyText type="lr" title={foundProduct?.description} color="#121212" />
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
          <SFListNewCollection
            data={products?.data?.slice(0, 4)}
            router={router}
          />
        </div>
      </SFContainer>
      <Spacer y={2} />
      <SFFooter />
    </SFDrawerContainer>
  );
};

export default SFShopDetails;

export const getStaticProps = async ({ params: { prodId, site } }) => {
  const res = await fetch(`http://localhost:4000/sf-products`);
  const data = await res.json();
  const products = data?.find((p) => p.tenant === site);
  const foundProduct = products?.data?.find((p) => p.id === +prodId);
  return {
    props: { foundProduct, products },
  };
};

export async function getStaticPaths() {
  const siteRes = await fetch(`${server}/api/sites`);
  const sitesData = await siteRes.json();
  const paths = [];

  const res = await fetch(`http://localhost:4000/sf-products`);
  const data = await res.json();
  const tempPaths = paths?.map((path) => path?.params?.site);
  const products = null;
  for (let j = 0; j < tempPaths.length; j++) {
    products = data?.find((p) => p.tenant === tempPaths[j]);
  }

  for (let i = 0; i < sitesData?.data?.length; i++) {
    for (let k = 0; k < products?.data?.length; k++) {
      paths.push({
        params: {
          site: sitesData?.data[i]?.storeTenant,
          prodId: products[k]?.data?.id,
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: "blocking",
  };
}
