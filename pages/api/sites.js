// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { STORES } from "../../constants";
import firebase from "../../firebase.config";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(403).json({ message: "Method not supported" });
  }
  try {
    const sites = await firebase.firestore().collectionGroup(STORES).get();
    const data = sites.docs.map((doc) => doc.data());
    return res
      .status(200)
      .json({ message: "Tenants successfully retrieved", data: data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
