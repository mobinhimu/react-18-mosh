import { useExpenseTracker } from "../contexts/expenseTracker";
import TableRow from "./TableRow";
import { currencyConverter } from "./util/healper";

function Expenses() {
  const { expense } = useExpenseTracker();

  const totalAmount = expense.reduce(
    (acc, curr) => acc + parseInt(curr.amount),
    0
  );

  if (!expense.length) return null;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">CTA</th>
        </tr>
      </thead>
      <tbody>
        {expense.map(({ id, ...props }) => (
          <TableRow id={id} {...props} key={id} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="text-center" colSpan={2} scope="col">
            TOTAL AMOUNT
          </td>
          <td className="text-left" scope="col" colSpan={2}>
            {currencyConverter(totalAmount)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Expenses;
