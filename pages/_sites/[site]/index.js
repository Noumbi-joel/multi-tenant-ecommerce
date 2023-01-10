import axios from "axios";
import React from "react";
import { BASE_URL } from "../../../constants";

export async function getStaticPaths() {
  const res = await axios.get(BASE_URL + "/api/sites");
  const sites = await res.data;
  const paths = [];
  sites.map((s) => paths.push({ params: { site: s.storeLink } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context) => {
  const res = await axios.get(BASE_URL + "/api/sites");
  const sites = await res.data;
  const data = [];
  sites.map((s) => data.push(s));

  const project = data.find((p) => p.storeLink === context.params.site);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};

export default function Index({ project }) {
  return (
    <div>
      store name: {project.storeName} <br/>
      store category: {project.storeCategory}
    </div>
  );
}
