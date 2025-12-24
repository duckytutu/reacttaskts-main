import { ProductForm } from "./components/organisms/ProductForm/ProductForm";
import { ProductList } from "./components/organisms/ProductList/ProductList";
import { useProductStore } from "./stores/productStore";
import type { Product } from "./schemas/productSchemas";

function App() {
  const addProduct = useProductStore((state) => state.addProduct);
  const products = useProductStore((state) => state.products);

  const handleProductSubmit = (product: Product) => {
    addProduct(product);
  };

  return (
    <div className="flex flex-col self-center min-h-screen py-10 items-center justify-center">
      <div className="w-[500px] flex flex-col gap-4">
        <ProductForm onSubmit={handleProductSubmit} />

        <div className="w-full">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
