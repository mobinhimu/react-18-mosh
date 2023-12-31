import { ComponentPropsWithoutRef } from "react";
import { ExpenseType } from "./ExpenseForm";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<ExpenseType | any>;
  label: string;
  name: string;
  errorMessage?: string;
  validationSchema?: Record<string, unknown>;
} & ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
  const {
    label,
    name,
    register,
    validationSchema,
    errorMessage,
    ...otherProps
  } = props;

  return (
    <div>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          className="form-control"
          {...otherProps}
          {...register(name, { ...validationSchema })}
        />

        {errorMessage && <p className="text-danger pt-2">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Input;
