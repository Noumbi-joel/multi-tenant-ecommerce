import React, { useEffect } from "react";

// comp
import {
  SFBanner,
  SFContainer,
  SFNewCollection,
  SFShopByCategory,
  SFFooter,
  SFDrawerContainer,
} from "../../../components";
import { Spacer } from "@nextui-org/react";

// assets
import { SF_PRODUCTS } from "../../../helpers";
import { useRouter } from "next/router";
import { server } from "../../../config";

const StoreFront = ({ project }) => {
  const router = useRouter();
  return (
    <SFDrawerContainer router={router}>
      <SFContainer storeName={project?.storeName}>
        <Spacer />
        <SFBanner />
        <SFNewCollection
          collectionTitle="New and stylish collection"
          collectionMsg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
          data={SF_PRODUCTS.slice(0, 8)}
          router={router}
        />
      </SFContainer>
      <SFShopByCategory />
      <SFFooter />
    </SFDrawerContainer>
  );
};

export default StoreFront;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/sites`);
  const data = await res.json();
  const project = data?.data?.find(
    (p) => p.storeTenant === context.params.site
  );

  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: { project },
  };
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/sites`);
  const data = await res.json();
  const paths = [];
  for (let i = 0; i < data?.data?.length; i++) {
    paths.push({ params: { site: data?.data[i]?.storeTenant } });
  }
  console.log(paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
}
