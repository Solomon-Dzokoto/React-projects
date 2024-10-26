import { useState } from 'react'
import ExpensesForm from './Components/ExpensesItems'
import ExpensesList from './Components/ExpensesList'
import TotalCost from './Components/TotalCost'



const App = () => {
  const [expenses,setExpenses] = useState([]);

   const addExpenses = (expense) => {
    setExpenses([...expenses,expense]);
   }

  return (
    <div className='App bg-sky-100  p-4 min-h-screen md:max-w-2xl md:mx-auto'>
          <h1 className='text-2xl text-sky-500 font-bold text-center'>Expenses Tracker</h1>
        <ExpensesForm addExpenses={addExpenses}/>
        <ExpensesList expenses={expenses} />
        <TotalCost expenses={expenses}/>
    </div>
  )
}

export default App
