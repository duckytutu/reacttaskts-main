import { Controller, type Control, type FieldErrors } from "react-hook-form";
import type { FormFieldConfig } from "../../../types/product";
import type { ProductFormData } from "../../../schemas/productSchemas";
import { Input, Select, Label, ErrorMessage } from "../../atoms";

interface FormFieldProps {
  field: FormFieldConfig;
  control: Control<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

export function FormField({ field, control, errors }: FormFieldProps) {
  const error = errors[field.name as keyof ProductFormData]?.message as string | undefined;
  const fieldName = field.name as keyof ProductFormData;

  if (field.type === "select") {
    return (
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange, value, ...fieldProps } }) => (
          <div className="w-full">
            <Label htmlFor={field.name} required={field.required}>
              {field.label}
            </Label>
            <Select
              {...fieldProps}
              id={field.name}
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              error={!!error}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <ErrorMessage message={error} />
          </div>
        )}
      />
    );
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <div className="w-full">
          <Label htmlFor={field.name} required={field.required}>
            {field.label}
          </Label>
          <Input
            {...fieldProps}
            id={field.name}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            error={!!error}
          />
          <ErrorMessage message={error} />
        </div>
      )}
    />
  );
}

