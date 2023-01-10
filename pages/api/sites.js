// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { STORES } from "../../constants";
import firebase from "../../firebase.config";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(403).json({ message: "Method not supported" });
  }
  try {
    firebase
      .firestore()
      .collectionGroup(STORES)
      .onSnapshot((snap) => {
        return res.status(200).json(snap.docs.map((doc) => doc.data()));
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
