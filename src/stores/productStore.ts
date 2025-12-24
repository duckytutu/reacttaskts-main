import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../schemas/productSchemas";

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (index: number) => void;
  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      removeProduct: (index) =>
        set((state) => ({
          products: state.products.filter((_, i) => i !== index),
        })),
      clearProducts: () => set({ products: [] }),
    }),
    {
      name: "product-storage",
    }
  )
);

