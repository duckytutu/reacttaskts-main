import type { ProductFormState } from "../types/product";
import { PRODUCT_TYPE_CONFIGS } from "../constants/productConfig";

export interface ValidationErrors {
  [key: string]: string;
}

export function validateProductForm(
  formState: ProductFormState
): ValidationErrors {
  const errors: ValidationErrors = {};
  const config = PRODUCT_TYPE_CONFIGS[formState.productType];

  for (const field of config.fields) {
    if (field.required) {
      const value = formState[field.name as keyof ProductFormState] as string;
      if (!value || value.trim() === "") {
        errors[field.name] = `${field.label} is required`;
      }
    }
  }

  return errors;
}

export function isFormValid(formState: ProductFormState): boolean {
  const errors = validateProductForm(formState);
  return Object.keys(errors).length === 0;
}

