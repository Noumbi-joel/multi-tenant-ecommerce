// icons
import Home from "../public/home-icon.svg";
import Product from "../public/product-icon.svg";
import Order from "../public/order-icon.svg";
import Customer from "../public/customer-icon.svg";
import Plugin from "../public/plugin-icon.svg";
import Theme from "../public/theme-icon.svg";
import Setting from "../public/setting-icon.svg";
import Account from "../public/account.svg";
import SettingA from "../public/setting.svg";
import Logout from "../public/logout.svg";
import RedTrash from "../public/red-trash.svg";
import SmallEye from "../public/sm-eye.svg";
import Pencil from "../public/pencil.svg";

import moment from "moment/moment";

export const SELECT_VALUES = {
  lang: ["FR", "ENG"],
  bCategory: [
    { id: 1, value: "Grocery/Food/Beverages" },
    { id: 2, value: "Restaurants & Hotels" },
    { id: 3, value: "Electronics/Computer Accessories" },
    { id: 4, value: "Art/Painting" },
    { id: 5, value: "Home essentials/furniture" },
    { id: 6, value: "Apparel/Fashion/Shoes/Accessories" },
    { id: 7, value: "Sport/Fitness/Outdoors" },
    { id: 8, value: "Toys/Crafts/Hobbies/Gifts/Pet care" },
  ],
};

export const VERTICAL_HEADER_ITEMS = [
  {
    id: 1,
    value: "Dashboard",
    link: "/dashboard",
    icon: <Home aria-label="home" />,
  },
  {
    id: 2,
    value: "Products",
    link: "/dashboard/products",
    icon: <Product aria-label="product" />,
  },
  {
    id: 8,
    value: "Categories",
    link: "/dashboard/categories",
    icon: "",
  },
  {
    id: 3,
    value: "Orders",
    link: "/dashboard/orders",
    icon: <Order aria-label="order" />,
  },
  {
    id: 4,
    value: "Customers",
    link: "/dashboard/customers",
    icon: <Customer aria-label="customer" />,
  },
  {
    id: 5,
    value: "Plugins",
    link: "/dashboard/plugins",
    icon: <Plugin aria-label="plugin" />,
  },
  {
    id: 6,
    value: "Themes",
    link: "/dashboard/themes",
    icon: <Theme aria-label="theme" />,
  },
  {
    id: 7,
    value: "Settings",
    link: "/dashboard/settings",
    icon: <Setting aria-label="setting" />,
  },
];

export const TOP_PRODUCTS = [
  { id: 1, image: "", title: "Hand knitted sweater", nbSales: 10 },
  { id: 2, image: "", title: "V-neck sweater", nbSales: 10 },
  { id: 3, image: "", title: "Cotton Sweater", nbSales: 10 },
  { id: 4, image: "", title: "Boyfriend sweater", nbSales: 10 },
  { id: 5, image: "", title: "Full zip sweater", nbSales: 10 },
];

export const TOP_CUSTOMERS = [
  { id: 1, name: "Chimdaalu Daniel", totalSpent: "25,000" },
  { id: 2, name: "Chuba Okadigbo", totalSpent: "25,000" },
  { id: 3, name: "Herbert Macaulay", totalSpent: "25,000" },
  { id: 4, name: "Paul Omu", totalSpent: "25,000" },
  { id: 5, name: "Chimaroke Nnamani", totalSpent: "25,000" },
];

export const ACTIONS = [
  { id: 1, title: "Account", icon: <Account aria-label="account" /> },
  { id: 2, title: "Help center", icon: <SettingA aria-label="setting" /> },
  { id: 3, title: "Logout", icon: <Logout aria-label="logout" /> },
];

export const PRODUCTS = [
  {
    id: 1,
    image:
      "https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp",
    title: "Shelves",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
  {
    id: 3,
    image:
      "https://cdn-images.article.com/products/SKU312A/2890x1500/image88310.jpg?fit=max&w=1200&q=100",
    title: "Tables",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: true,
    selected: false,
  },
  {
    id: 4,
    image:
      "https://images.tcdn.com.br/img/img_prod/936739/sofa_retratil_reclinavel_1_80m_de_largura_modelo_berlim_1333_1_beb8f865110501f1ff37754bd57c78c1.jpg",
    title: "DIY TV Units",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
];

export const FILTERS = [
  { id: 1, title: "all products" },
  { id: 2, title: "published" },
  { id: 3, title: "draft" },
  { id: 4, title: "hidden" },
];

export const UPDATES = [
  { id: 1, title: "last updated" },
  { id: 2, title: "name" },
  { id: 3, title: "in stock" },
];

export const CATEGORIES = [
  {
    id: 1,
    image:
      "https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp",
    title: "Men",
    slug: "men",
    items: "0",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Women",
    slug: "women",
    items: "0",
    visible: false,
    published: false,
    draft: true,
    selected: false,
  },
];

export const FILTERS_CAT = [
  { id: 1, title: "All categories" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
];

export const ITEM_ACTIONS = [
  { id: 1, title: "Edit product", icon: <Pencil aria-label="pencil" /> },
  { id: 2, title: "Hide product", icon: <SmallEye aria-label="sm-eye" /> },
  { id: 3, title: "Delete product", icon: <RedTrash aria-label="red-trash" /> },
];

let date = moment().format("MMM, DD YYYY");

export const ORDERS = [
  {
    id: 1,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 2,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 3,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 4,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 5,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 6,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 7,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 8,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 9,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
];

export const ORDERS_FILTERS = [
  { id: 1, title: "All  orders" },
  { id: 2, title: "Fullfilled" },
  { id: 3, title: "Unfulfilled" },
];

export const ORDERS_SORT = [
  { id: 1, title: "Last created" },
  { id: 2, title: "Order number" },
];

export const ORDERS_HEADER = [
  { id: 1, title: "ID" },
  { id: 2, title: "Date" },
  { id: 3, title: "Customers" },
  { id: 4, title: "Fullfillment" },
  { id: 5, title: "Total" },
];

export const TRANSACTIONS = [
  { id: 1, title: "Payment method" },
  { id: 2, title: "Status" },
  { id: 3, title: "Amount" },
  { id: 4, title: "Date" },
];

export const PAID = [
  { id: 1, header: { headerValue: "Subtotal", value: "FCFA54,000" } },
  { id: 2, header: { headerValue: "Shipping cost", value: "FCFA54,000" } },
  { id: 3, header: { headerValue: "Total", value: "FCFA54,000" } },
];
