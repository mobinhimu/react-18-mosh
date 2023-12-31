import { type ChangeEvent } from "react";
import { type ExpenseType } from "./ExpenseForm";

export type OptionTypes = {
  name: string;
  label: string;
};

type SelectProps = {
  expense: ExpenseType;
  selectOption: OptionTypes[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ expense, selectOption = [], handleChange }: SelectProps) {
  return (
    <select
      className="form-select"
      name="category"
      value={expense.category}
      onChange={handleChange}
    >
      {selectOption.map(({ label, name }) => (
        <option value={name} key={name}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;

{
  /* <option value="">Select Your Category</option>
      <option value="groceries">Groceries</option>
      <option value="utilities">Utilities</option>
      <option value="entertainment">Entertainment</option> */
}
