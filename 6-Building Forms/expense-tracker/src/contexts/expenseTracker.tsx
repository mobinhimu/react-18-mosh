import { type ReactNode, createContext, useContext, useReducer } from "react";
import { ExpenseType } from "../components/ExpenseForm";

export type ExpenseItem = ExpenseType & {
  id: string;
};

export type ExpenseItemsType = ExpenseItem[];

type ExpenseState = {
  expense: ExpenseItemsType;
};

type ExpenseContextValue = {
  expense: ExpenseItemsType;
  createExpense: (expense: ExpenseItem) => void;
  deleteExpense: (id: string) => void;
};

const ExpenseContext = createContext<ExpenseContextValue | null>(null);

const initialState: ExpenseState = {
  expense: [],
};

type ADD_EXPENSE = {
  payload: ExpenseItem;
  type: "ADD_EXPENSE";
};
type DELETE_EXPENSE = {
  payload: string;
  type: "DELETE_EXPENSE";
};

function expenseReducer(
  state: ExpenseState,
  action: ADD_EXPENSE | DELETE_EXPENSE
): ExpenseState {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expense: state.expense.filter((exp) => exp.id !== action.payload),
      };
    default:
      return state;
  }
}

interface ExpenseTrackerProviderProps {
  children: ReactNode;
}
export default function ExpenseTrackerProvider({
  children,
}: ExpenseTrackerProviderProps) {
  const [{ expense }, dispatch] = useReducer(expenseReducer, initialState);

  const expenseCtxValue: ExpenseContextValue = {
    expense,
    createExpense(expense) {
      dispatch({ type: "ADD_EXPENSE", payload: expense });
    },
    deleteExpense(id) {
      dispatch({ type: "DELETE_EXPENSE", payload: id });
    },
  };

  return (
    <ExpenseContext.Provider value={expenseCtxValue}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenseTracker() {
  const expense = useContext(ExpenseContext);
  if (expense === null) throw new Error("");

  return expense;
}
