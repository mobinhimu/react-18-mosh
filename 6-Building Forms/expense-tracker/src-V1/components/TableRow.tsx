import { useExpenseTracker } from "../contexts/expenseTracker";
import { type ExpenseItem } from "./ExpenseForm";
import { currencyConverter } from "./util/healper";

function TableRow({ amount, category, description, id }: ExpenseItem) {
  const { deleteExpense } = useExpenseTracker();

  return (
    <tr>
      <th scope="row">{description}</th>
      <td>{currencyConverter(+amount)}</td>
      <td>{category}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteExpense(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
