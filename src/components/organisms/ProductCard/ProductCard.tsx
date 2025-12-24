import { type Product, ProductType } from "../../../schemas/productSchemas";
import { PRODUCT_TYPE_CONFIGS } from "../../../constants/productConfig";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const config = PRODUCT_TYPE_CONFIGS[product.productType];
  const borderColor = config.buttonStyle.background;

  const renderProductSpecificInfo = () => {
    switch (product.productType) {
      case ProductType.SODA:
        return (
          <>
            {product.flavor && (
              <>
                - <span>{product.flavor}</span>
              </>
            )}
            {product.packageType && product.servingSize && (
              <div className="text-(--text-secondary) text-sm mb-2">
                Size: {product.packageType}, {product.servingSize}
              </div>
            )}
          </>
        );
      case ProductType.SHAMPOO:
        return (
          <>
            {product.scent && (
              <>
                - <span>{product.scent}</span>
              </>
            )}
            {product.bottleSize && (
              <div className="text-(--text-secondary) text-sm mb-2 last:mb-2">
                Size: {product.bottleSize}
              </div>
            )}
          </>
        );
      case ProductType.SHOES:
        return (
          <>
            {product.shoeSize && (
              <div className="text-(--text-secondary) text-sm mb-2 last:mb-2">
                Size: {product.shoeSize} ( European )
              </div>
            )}
            {product.shoeColor && (
              <div className="text-(--text-secondary) text-sm mb-2 last:mb-2">
                Color: {product.shoeColor}
              </div>
            )}
            {product.gender && (
              <div className="text-(--text-secondary) text-sm mb-2 last:mb-2">
                Gender: {product.gender}
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="bg-(--bg-tertiary) rounded-[10px] p-4 w-full text-(--text-primary) font-sans shadow-[0_2px_5px_rgba(0,0,0,0.4)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
      style={{
        border: `2px solid ${borderColor}`,
      }}
    >
      <span className="text-lg mb-1 text-(--text-white) block">
        {product.name}
      </span>
      {renderProductSpecificInfo()}
      <p className="text-(--text-secondary) text-sm mb-2">Brand: {product.brand}</p>
      Price: <span className="text-(--price) text-base font-bold">{product.price}$</span>
    </div>
  );
}

