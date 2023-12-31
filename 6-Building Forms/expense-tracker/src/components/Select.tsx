import { UseFormRegister } from "react-hook-form";
import { ExpenseType } from "./ExpenseForm";

export type OptionTypes = {
  name: string;
  label: string;
};

type SelectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<ExpenseType | any>;
  validationSchema?: Record<string, unknown>;
  name: string;
  errorMessage?: string;
  selectOption: OptionTypes[];
};

function Select({
  selectOption = [],
  register,
  name,
  errorMessage,
  validationSchema,
  ...othersProps
}: SelectProps) {
  return (
    <>
      <select
        className="form-select"
        {...register(name, { ...validationSchema })}
        {...othersProps}
      >
        {selectOption.map(({ label, name }) => (
          <option value={name} key={name}>
            {label}
          </option>
        ))}
      </select>
      {errorMessage && <p className="text-danger pt-2">{errorMessage}</p>}
    </>
  );
}

export default Select;
