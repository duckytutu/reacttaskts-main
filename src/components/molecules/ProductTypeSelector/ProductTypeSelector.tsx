import { ProductType } from "../../../schemas/productSchemas";
import { PRODUCT_TYPES } from "../../../constants/productConfig";
import { Label, Select } from "../../atoms";

interface ProductTypeSelectorProps {
  value: ProductType;
  onChange: (productType: ProductType) => void;
}

export function ProductTypeSelector({
  value,
  onChange,
}: ProductTypeSelectorProps) {
  return (
    <div className="w-full">
      <Label htmlFor="productType">Product type</Label>
      <Select
        id="productType"
        name="productType"
        value={value}
        onChange={(event) => onChange(event.target.value as ProductType)}
        className="w-full"
      >
        {PRODUCT_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
    </div>
  );
}

