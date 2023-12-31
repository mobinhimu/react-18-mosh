import { type ChangeEvent, type FormEvent, useState } from "react";
import Input from "./Input";
import Select, { OptionTypes } from "./Select";
import { useExpenseTracker } from "../contexts/expenseTracker";

export type ExpenseType = {
  description: string;
  amount: string;
  category: string;
};

export type ExpenseItem = ExpenseType & {
  id: string;
};

export type ExpenseItemsType = ExpenseItem[];

export type HandleDelete = {
  handleDeleteExpense: (id: string) => void;
};

const categoryOptions: OptionTypes[] = [
  {
    name: "",
    label: "Select Your Category",
  },
  {
    name: "groceries",
    label: "Groceries",
  },
  {
    name: "utilities",
    label: "Utilities",
  },
  {
    name: "entertainment",
    label: "Entertainment",
  },
];

function ExpenseForm() {
  const { createExpense } = useExpenseTracker();
  const [expense, setExpense] = useState<ExpenseType>({
    description: "",
    amount: "",
    category: "",
  });

  function handleSubmit(eve: FormEvent) {
    eve.preventDefault();

    const { amount, category, description } = expense;
    if (!amount || !category || !description) {
      alert("Please Enter A Valid Input");
      return null;
    }

    createExpense({ ...expense, id: crypto.randomUUID() });

    setExpense({
      description: "",
      amount: "",
      category: "",
    });
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit}>
        <Input
          label="Description"
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
        />
        <Input
          label="Amount"
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <label htmlFor="form-select" className="form-label">
          Category
        </label>

        <Select
          expense={expense}
          handleChange={handleChange}
          selectOption={categoryOptions}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
