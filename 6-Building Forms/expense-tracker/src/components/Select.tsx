import { UseFormRegister } from "react-hook-form";
import { ExpenseNameTypes, ExpenseType } from "./ExpenseForm";

export type OptionTypes = {
  name: string;
  label: string;
};

type SelectProps = {
  register: UseFormRegister<ExpenseType>;
  name: string;
  errorMessage?: string;
  selectOption: OptionTypes[];
};

function Select({
  selectOption = [],
  register,
  name,
  errorMessage,
  ...othersProps
}: SelectProps) {
  return (
    <>
      <select
        className="form-select"
        {...register(name as ExpenseNameTypes)}
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
