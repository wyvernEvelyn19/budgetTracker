import { UNCATEGORIZED_BUGET_ID, useBudgets } from "../contexts/BudgetContexts";
import BudgetCard from "./BudgetCard";

export default function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) return null;

  return <BudgetCard amount={amount} name="Uncategorized" gray {...props} />;
}
