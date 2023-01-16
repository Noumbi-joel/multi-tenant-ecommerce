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
    id: 7,
    value: "Categories",
    link: "/dashboard/products/categories",
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
  { id: 1,  name: "Chimdaalu Daniel", totalSpent: '25,000' },
  { id: 2,  name: "Chuba Okadigbo", totalSpent: '25,000' },
  { id: 3,  name: "Herbert Macaulay", totalSpent: '25,000' },
  { id: 4,  name: "Paul Omu", totalSpent: '25,000' },
  { id: 5,  name: "Chimaroke Nnamani", totalSpent: '25,000' },
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
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
  },
  {
    id: 3,
    image:
      "https://cdn-images.article.com/products/SKU312A/2890x1500/image88310.jpg?fit=max&w=1200&q=100",
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
  },
  {
    id: 4,
    image:
      "https://images.tcdn.com.br/img/img_prod/936739/sofa_retratil_reclinavel_1_80m_de_largura_modelo_berlim_1333_1_beb8f865110501f1ff37754bd57c78c1.jpg",
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
  },
];

export const FILTERS = [
  { id: 1, title: "All products" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
  { id: 4, title: "Hidden" },
];

export const UPDATES = [
  { id: 1, title: "Last updated" },
  { id: 2, title: "Name" },
  { id: 3, title: "In stock" },
];

export const CATEGORY_ITEMS = [
  {
    id: 1,
    image:
      "https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp",
    title: "Men",
    slug: "men",
    items: "0",
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Women",
    slug: "men",
    items: "0",
  },
];

export const FILTERS_CAT = [
  { id: 1, title: "All categories" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
];
