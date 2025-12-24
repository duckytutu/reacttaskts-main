import { useForm } from "react-hook-form";
import { ProductType, type Product } from "../schemas/productSchemas";
import type { ProductFormData } from "../schemas/productSchemas";
import { createInitialFormState } from "../utils/formHelpers";

export function useProductForm(initialProductType: ProductType = ProductType.SODA) {
  const initialValues = createInitialFormState(initialProductType);

  const form = useForm<ProductFormData>({
    defaultValues: {
      ...initialValues,
      productType: initialProductType,
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const productType = form.watch("productType");

  const updateProductType = (newProductType: ProductType) => {
    const newInitialValues = createInitialFormState(newProductType);
    form.reset({
      ...newInitialValues,
      productType: newProductType,
    });
    form.clearErrors();
  };

  const createProduct = (data: ProductFormData): Product => {
    return data;
  };

  return {
    form,
    productType,
    updateProductType,
    createProduct,
  };
}

