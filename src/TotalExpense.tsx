import React from 'react';

const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <h2>Total Expense: R{total}</h2>;
};

export default TotalExpense;
