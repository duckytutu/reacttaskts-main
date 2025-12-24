import { Controller } from "react-hook-form";
import { useProductForm } from "../../../hooks/useProductForm";
import { ProductType, type Product } from "../../../schemas/productSchemas";
import { PRODUCT_TYPE_CONFIGS } from "../../../constants/productConfig";
import { ProductTypeSelector } from "../../molecules/ProductTypeSelector/ProductTypeSelector";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms";
import { getProductSchema } from "../../../schemas/productSchemas";
import { createInitialFormState } from "../../../utils/formHelpers";
import type { ProductFormData } from "../../../schemas/productSchemas";

interface ProductFormProps {
  onSubmit: (product: Product) => void;
}

export function ProductForm({ onSubmit }: ProductFormProps) {
  const { form, productType, updateProductType, createProduct } = useProductForm(ProductType.SODA);

  const config = PRODUCT_TYPE_CONFIGS[productType];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data = form.getValues();
    
    const schema = getProductSchema(productType);
    const validationResult = await schema.safeParseAsync(data);
    
    if (!validationResult.success) {
      form.clearErrors();
      
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (path) {
          form.setError(path as keyof ProductFormData, {
            type: "validation",
            message: issue.message,
          });
        }
      });
      return;
    }

    const product = createProduct(validationResult.data);
    onSubmit(product);
    
    const newInitialValues = createInitialFormState(productType);
    form.reset({
      ...newInitialValues,
      productType,
    });
  };

  const formFields = config.fields.filter((f) => f.name !== "productType");

  return (
    <form
      id="ProductForm"
      className="grid grid-cols-2 gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <Controller
        name="productType"
        control={form.control}
        render={({ field }) => (
          <div className="col-span-2">
            <ProductTypeSelector
              value={field.value}
              onChange={(newType) => {
                field.onChange(newType);
                updateProductType(newType);
              }}
            />
          </div>
        )}
      />

      {formFields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          control={form.control}
          errors={form.formState.errors}
        />
      ))}

      <div className="col-span-2">
        <Button
          type="submit"
          className="w-full"
          style={{
            background: config.buttonStyle.background,
            color: config.buttonStyle.color,
          }}
        >
          {config.buttonText}
        </Button>
      </div>
    </form>
  );
}

