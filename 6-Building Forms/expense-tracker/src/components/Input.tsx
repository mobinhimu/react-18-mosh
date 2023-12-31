import { ComponentPropsWithoutRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { ExpenseNameTypes, ExpenseType } from "./ExpenseForm";

type InputProps = {
  register: UseFormRegister<ExpenseType>;
  label: string;
  name: string;
  errorMessage?: string;
} & ComponentPropsWithoutRef<"input">;

const Input = function (props: InputProps) {
  const { label, name, register, errorMessage, ...otherProps } = props;
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          className="form-control"
          {...otherProps}
          {...register(name as ExpenseNameTypes, {
            valueAsNumber: { ...otherProps }.type === "number",
          })}
        />

        {errorMessage && <p className="text-danger pt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
