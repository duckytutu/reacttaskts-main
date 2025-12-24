export {
  ProductType,
  type Product,
  type SodaProduct,
  type ShampooProduct,
  type ShoeProduct,
} from "../schemas/productSchemas";

import { ProductType } from "../schemas/productSchemas";

export interface ProductFormState {
  productType: ProductType;
  name: string;
  price: string;
  brand: string;
  // Soda fields
  flavor: string;
  packageType: string;
  servingSize: string;
  // Shampoo fields
  scent: string;
  bottleSize: string;
  // Shoe fields
  shoeSize: string;
  shoeColor: string;
  gender: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "select";
  required: boolean;
  options?: string[];
}

export interface ProductTypeConfig {
  type: ProductType;
  label: string;
  buttonText: string;
  buttonStyle: {
    background: string;
    color: string;
  };
  fields: FormFieldConfig[];
}

