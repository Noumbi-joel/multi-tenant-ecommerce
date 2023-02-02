import React from "react";

// assets
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { COLORS } from "../../../../assets/colors";
import Filters from "../../../../public/Filters.svg";

// comp
import {
  BodyText,
  SFContainer,
  SFDrawerContainer,
  SFSectionTexts,
  SFFilters,
  SFListNewCollection,
  SFFooter,
} from "../../../../components";
import { Divider, Spacer } from "@nextui-org/react";
import { SF_PRODUCTS } from "../../../../helpers";
import { OPEN_FILTER_DRAWER } from "../../../../constants";

const Shop = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <SFDrawerContainer router={router}>
      <SFContainer />
      <Divider className="sf-divider" />
      <SFContainer shop>
        <Spacer />
        <SFSectionTexts
          title="Shop"
          msg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
        />
        <Spacer y={1.5} />
        <div className="sf-filters-row">
          <div
            className="sf-filters-mobile"
            onClick={() => dispatch({ type: OPEN_FILTER_DRAWER })}
          >
            <Filters />
            <BodyText type="mr" title="Filters" color="#121212" />
          </div>
          <SFFilters />
          <BodyText
            type="mr"
            title={`${products?.data?.length} products`}
            color={COLORS.grayscale_900}
          />
        </div>
        <SFListNewCollection
          router={router}
          data={products?.data}
          btnTitleList="Load more"
        />
      </SFContainer>
      <Spacer y={2} />
      <SFFooter />
    </SFDrawerContainer>
  );
};

export default Shop;

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/sf-products`);
  const data = await res.json();
  const products = data?.find((p) => p.tenant === context.params.site);
  return {
    props: { products },
  };
};
