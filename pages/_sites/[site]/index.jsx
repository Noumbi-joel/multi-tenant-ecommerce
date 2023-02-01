import React from "react";

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
import { useRouter } from "next/router";
import { server } from "../../../config";

const StoreFront = ({ project, products }) => {
  const router = useRouter();
  return (
    <SFDrawerContainer router={router}>
      <SFContainer storeName={project?.storeName}>
        <Spacer />
        <SFBanner />
        <SFNewCollection
          collectionTitle="New and stylish collection"
          collectionMsg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
          data={products?.data?.slice(0, 8)}
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

  const prodRes = await fetch(`http://localhost:4000/sf-products`);
  const prodData = await prodRes.json();
  const products = prodData?.find(
    (p) => p.id === project?.storeId.split("/")[0]
  );

  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: { project, products },
  };
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/sites`);
  const data = await res.json();
  const paths = [];
  for (let i = 0; i < data?.data?.length; i++) {
    paths.push({ params: { site: data?.data[i]?.storeTenant } });
  }
  return {
    paths: paths,
    fallback: "blocking",
  };
}
