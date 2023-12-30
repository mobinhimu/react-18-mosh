import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import ExpenseTrackerProvider from "./contexts/expenseTracker";

function App() {
  return (
    <ExpenseTrackerProvider>
      <div className="container">
        <ExpenseForm />
        <Expenses />
      </div>
    </ExpenseTrackerProvider>
  );
}

export default App;
