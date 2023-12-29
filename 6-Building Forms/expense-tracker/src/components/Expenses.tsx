import { HandleDelete, type ExpenseItemsType } from "./ExpenseForm";
import TableRow from "./TableRow";
import { currencyConverter } from "./util/healper";

type ExpenseType = {
  expenseItems: ExpenseItemsType;
};

function Expenses({
  expenseItems,
  handleDeleteExpense,
}: ExpenseType & HandleDelete) {
  const totalAmount = expenseItems.reduce(
    (acc, curr) => acc + parseInt(curr.amount),
    0
  );

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
        {expenseItems.map(({ id, ...props }) => (
          <TableRow
            id={id}
            {...props}
            key={id}
            handleDeleteExpense={handleDeleteExpense}
          />
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
