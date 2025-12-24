import { z } from "zod";

export const ProductType = {
  SODA: "Soda",
  SHAMPOO: "Shampoo",
  SHOES: "Shoes",
} as const;

export type ProductType = (typeof ProductType)[keyof typeof ProductType];

const baseProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(1, "Price is required"),
  brand: z.string().optional(),
});

export const sodaProductSchema = baseProductSchema.extend({
  productType: z.literal(ProductType.SODA),
  flavor: z.string().optional(),
  packageType: z.string().min(1, "Package type is required"),
  servingSize: z.string().optional(),
});

export const shampooProductSchema = baseProductSchema.extend({
  productType: z.literal(ProductType.SHAMPOO),
  scent: z.string().optional(),
  bottleSize: z.string().min(1, "Bottle size is required"),
});

export const shoeProductSchema = baseProductSchema.extend({
  productType: z.literal(ProductType.SHOES),
  shoeSize: z.string().optional(),
  shoeColor: z.string().optional(),
  gender: z.string().optional(),
});

export const productFormSchema = z.discriminatedUnion("productType", [
  sodaProductSchema,
  shampooProductSchema,
  shoeProductSchema,
]);

export type SodaProduct = z.infer<typeof sodaProductSchema>;
export type ShampooProduct = z.infer<typeof shampooProductSchema>;
export type ShoeProduct = z.infer<typeof shoeProductSchema>;
export type Product = SodaProduct | ShampooProduct | ShoeProduct;

export type ProductFormData = z.infer<typeof productFormSchema>;

export function getProductSchema(productType: ProductType) {
  switch (productType) {
    case ProductType.SODA:
      return sodaProductSchema;
    case ProductType.SHAMPOO:
      return shampooProductSchema;
    case ProductType.SHOES:
      return shoeProductSchema;
  }
}

