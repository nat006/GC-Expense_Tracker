import React from "react";

type ExpenseItemProps = {
  expense: {
    id: number;
    description: string;
    amount: number;
  };
  deleteExpense: (id: number) => void;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, deleteExpense }) => {
  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <div className="expense-item">
      <h3>{expense.description}</h3>
      <p>Amount: {expense.amount}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;