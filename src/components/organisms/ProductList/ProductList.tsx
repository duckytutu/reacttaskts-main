import type { Product } from "../../../schemas/productSchemas";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div 
      className="grid grid-cols-2 gap-4 max-h-[450px] overflow-y-auto scrollbar-custom p-4" 
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#555 #1c1c1c' }}
    >
      {products.length === 0 ? (
        <div className="col-span-2 text-(--border-focus) italic py-8 text-center">
          No products added yet
        </div>
      ) : (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </div>
  );
}

