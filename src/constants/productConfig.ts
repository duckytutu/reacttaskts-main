import { ProductType } from "../schemas/productSchemas";
import type { ProductTypeConfig } from "../types/product";

export const PRODUCT_TYPE_CONFIGS: Record<ProductType, ProductTypeConfig> = {
  [ProductType.SODA]: {
    type: ProductType.SODA,
    label: "Soda",
    buttonText: "Add Soda",
    buttonStyle: {
      background: "#b82b1b",
      color: "white",
    },
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
      },
      {
        name: "brand",
        label: "Brand",
        type: "text",
        required: false,
      },
      {
        name: "flavor",
        label: "Flavor",
        type: "text",
        required: false,
      },
      {
        name: "packageType",
        label: "Package type",
        type: "select",
        required: true,
        options: ["Can", "Plastic Bottle", "Glass Bottle"],
      },
      {
        name: "servingSize",
        label: "Serving Size",
        type: "text",
        required: false,
      },
    ],
  },
  [ProductType.SHAMPOO]: {
    type: ProductType.SHAMPOO,
    label: "Shampoo",
    buttonText: "Add Shampoo",
    buttonStyle: {
      background: "#36ff3d",
      color: "#242424",
    },
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
      },
      {
        name: "brand",
        label: "Brand",
        type: "text",
        required: false,
      },
      {
        name: "scent",
        label: "Scent",
        type: "text",
        required: false,
      },
      {
        name: "bottleSize",
        label: "Bottle Size",
        type: "text",
        required: true,
      },
    ],
  },
  [ProductType.SHOES]: {
    type: ProductType.SHOES,
    label: "Shoes",
    buttonText: "Add Shoes",
    buttonStyle: {
      background: "#19aad8",
      color: "#242424",
    },
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
      },
      {
        name: "brand",
        label: "Brand",
        type: "text",
        required: false,
      },
      {
        name: "shoeSize",
        label: "Shoe size",
        type: "text",
        required: false,
      },
      {
        name: "shoeColor",
        label: "Shoe color",
        type: "text",
        required: false,
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        required: false,
        options: ["Male", "Female", "Unisex"],
      },
    ],
  },
};

export const PRODUCT_TYPES = Object.values(ProductType);

