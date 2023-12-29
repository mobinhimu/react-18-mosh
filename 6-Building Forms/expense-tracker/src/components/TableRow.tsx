import { HandleDelete, type ExpenseItem } from "./ExpenseForm";
import { currencyConverter } from "./util/healper";

function TableRow({
  amount,
  category,
  description,
  handleDeleteExpense,
  id,
}: ExpenseItem & HandleDelete) {
  return (
    <tr>
      <th scope="row">{description}</th>
      <td>{currencyConverter(+amount)}</td>
      <td>{category}</td>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteExpense(id)}
      >
        Delete
      </button>
    </tr>
  );
}

export default TableRow;
