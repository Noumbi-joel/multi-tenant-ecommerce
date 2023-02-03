import toast from "react-hot-toast";
import {
  CLOSE_ALL_CAT_CHECKER,
  CLOSE_ALL_CHECKER,
  CLOSE_ALL_SELECTED_MODAL,
  CLOSE_ALL_SELECTED_MODAL_CAT,
  DELETE_CAT_ITEMS,
  DELETE_ITEMS,
  DISCARD_CAT_ITEMS_SELECTED,
  DISCARD_ITEM_SELECTED,
  FILTERING,
  FILTERING_CATEGORY,
  FILTERING_CUSTOMERS,
  FILTERING_ORDERS,
  OPEN_ALL_ITEM_MODAL,
  SET_FILTER,
  SET_FILTER_CATEGORY,
  SET_FILTER_ORDER,
  SET_FILTER_PRODUCT,
  USERS,
} from "../constants";
import firebase from "../firebase.config";

// verify if email is valid or not
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// export const validatePhoneNumber = (value) => {
//   return String(value).toLowerCase().match(/^(+?237)?[6-9]{1}d{7}$/g);
// };

// input search filter for products && categories
export const searchFilter = (
  e,
  type,
  items,
  filteredItems,
  setSearch,
  dispatch
) => {
  const value = e.target.value;

  if (value) {
    const newData = filteredItems.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      return itemData.indexOf(value.toUpperCase()) > -1;
    });

    type === "products" && dispatch({ type: FILTERING, payload: newData });
    type === "categories" &&
      dispatch({ type: FILTERING_CATEGORY, payload: newData });
    setSearch(value);
  } else {
    type === "products" && dispatch({ type: FILTERING, payload: items });
    type === "categories" &&
      dispatch({ type: FILTERING_CATEGORY, payload: items });
    setSearch(value);
  }
};

// input search filter for products && categories
export const searchFilterName = (
  e,
  type,
  items,
  filteredItems,
  setSearch,
  dispatch
) => {
  const value = e.target.value;

  if (value) {
    const newData = filteredItems.filter((item) => {
      const itemData = item.customerName
        ? item.customerName.toUpperCase()
        : "".toUpperCase();
      return itemData.indexOf(value.toUpperCase()) > -1;
    });
    type === "orders" && dispatch({ type: FILTERING_ORDERS, payload: newData });
    type === "customers" &&
      dispatch({ type: FILTERING_CUSTOMERS, payload: newData });
    setSearch(value);
  } else {
    type === "orders" && dispatch({ type: FILTERING_ORDERS, payload: items });
    type === "customers" &&
      dispatch({ type: FILTERING_CUSTOMERS, payload: items });
    setSearch(value);
  }
};

// filter products && categories && orders
export const handleClickFilters = (a, dispatch, closeVisible, data) => {
  closeVisible();
  let temp = data.map((d) => d.title);
  if (temp.includes("All categories")) {
    dispatch({
      type: SET_FILTER_CATEGORY,
      payload: a.title.toLowerCase(),
    });
  }

  if (temp.includes("All  orders")) {
    dispatch({
      type: SET_FILTER_ORDER,
      payload: a.title.toLowerCase(),
    });
  }

  if (temp.includes("All products")) {
    dispatch({
      type: SET_FILTER_PRODUCT,
      payload: a.title.toLowerCase(),
    });
  }

  dispatch({ type: SET_FILTER, payload: a.title });
};

// products page functions
export const handleDiscard = (dispatch, allChecker) => {
  dispatch({ type: DISCARD_ITEM_SELECTED });
  if (allChecker) {
    dispatch({ type: CLOSE_ALL_CHECKER });
  }
};

export const handleDeleteItems = (dispatch) => {
  dispatch({ type: OPEN_ALL_ITEM_MODAL });
};

export const handleDeleteAllItems = (dispatch) => {
  dispatch({ type: DELETE_ITEMS });
  dispatch({ type: CLOSE_ALL_SELECTED_MODAL });
  dispatch({ type: CLOSE_ALL_CHECKER });
};

// categories page functions
export const handleDiscardCat = (dispatch, allCheckerCat) => {
  dispatch({ type: DISCARD_CAT_ITEMS_SELECTED });
  if (allCheckerCat) {
    dispatch({ type: CLOSE_ALL_CAT_CHECKER });
  }
};

export const handleDeleteAllItemsCat = (dispatch) => {
  dispatch({ type: DELETE_CAT_ITEMS });
  dispatch({ type: CLOSE_ALL_SELECTED_MODAL_CAT });
  dispatch({ type: CLOSE_ALL_CAT_CHECKER });
};

// verify if the user already has a business
export const verifyBusiness = async (router) => {
  const uid = firebase.auth().currentUser?.uid;

  firebase
    .firestore()
    .collection(USERS)
    .doc(uid)
    .get()
    .then((res) => {
      if (res.data()?.noBusiness) {
        return router.push("/businessInfo");
      }
    })
    .catch((err) => {
      return toast.error("An error occured: ", err.message);
    });
};
