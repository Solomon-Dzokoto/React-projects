
const ExpensesList = ({ expenses }) => {
  return (
    <ul>
      {expenses.length === 0 ? (
        <h2 className="text-2xl text-sky-500 mt-8 text-center">No expenses added yet</h2>
      ) : (
        expenses.map((expense, i) => (
          <li className="mt-8 py-2 border-b-2 border-slate-500" key={i}>
            <small className="small">{expense.date}</small> - {expense.category.toUpperCase()} : <p className="inline-block text-green-600"> ${expense.amount}</p> 
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpensesList;
