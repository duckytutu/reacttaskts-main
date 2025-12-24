import { ProductType } from "../schemas/productSchemas";
import type { ProductFormState } from "../types/product";

export function createInitialFormState(productType: ProductType): ProductFormState {
  return {
    productType,
    name: "",
    price: "",
    brand: "",
    flavor: "",
    packageType: "",
    servingSize: "",
    scent: "",
    bottleSize: "",
    shoeSize: "",
    shoeColor: "",
    gender: "",
  };
}

export function resetFormFields(
  _currentState: ProductFormState,
  newProductType: ProductType
): ProductFormState {
  return {
    ...createInitialFormState(newProductType),
    productType: newProductType,
  };
}

