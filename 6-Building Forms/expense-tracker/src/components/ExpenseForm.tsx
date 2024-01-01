import { z } from "zod";
import { useExpenseTracker } from "../contexts/expenseTracker";
import Input from "./Input";
import Select, { OptionTypes } from "./Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DevTool } from "@hookform/devtools";

const expenseSchema = z.object({
  description: z
    .string()
    .min(1, { message: "At least 1 character should be provided" })
    .max(12, { message: "Please provide maximum 12 character" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .int()
    .gte(1)
    .lte(99999),
  category: z
    .string({
      invalid_type_error: "Width Is Required",
    })
    .min(1, {
      message: "You should select at least 1 category",
    }),
});

export type ExpenseType = z.infer<typeof expenseSchema>;
export type ExpenseNameTypes = keyof z.infer<typeof expenseSchema>;

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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ExpenseType>({ resolver: zodResolver(expenseSchema) });

  const { createExpense } = useExpenseTracker();

  function onSubmit(expense: ExpenseType) {
    createExpense({ ...expense, id: crypto.randomUUID() });
    reset();
  }
  console.log(errors);

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Description"
          type="text"
          name="description"
          register={register}
        />
        {errors?.description && (
          <p className="text-danger">
            {errors?.description?.message?.toString()}
          </p>
        )}

        <Input label="Amount" type="number" name="amount" register={register} />

        {errors?.amount && (
          <p className="text-danger">{errors?.amount?.message?.toString()}</p>
        )}

        <label htmlFor="form-select" className="form-label">
          Category
        </label>
        <Select
          selectOption={categoryOptions}
          register={register}
          name="category"
        />

        {errors?.category && (
          <p className="text-danger pt-4">
            {errors?.category?.message?.toString()}
          </p>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>

      <DevTool control={control} />
    </>
  );
}

export default ExpenseForm;
