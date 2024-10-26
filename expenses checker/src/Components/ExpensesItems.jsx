import { useState } from "react"
import {format} from 'date-fns'

const ExpensesForm = ({addExpenses}) => {
  const [date,setDate]=useState(new Date());
  const [category,setCategory]=useState('')
  const [amount,setAmount]=useState('')

  const formattedDate = format(date,'dd-MM-yy h:mm a');
  const handleSubmit = (e) => {
    if(amount==='' || category === ''){
      e.preventDefault();
      
    }else{
      e.preventDefault();
      addExpenses({date:formattedDate,category,amount})
      setAmount('')
      setCategory('')
      setDate(new Date())
    }
 
  }
 
  return (
    <form onSubmit={ handleSubmit}>
        <div className="cat mt-4">
            <label htmlFor="category" className="block">Category:</label>
          <input
          className="w-full p-2 border-2 border-slate-400 rounded"
          type="text"
          placeholder="category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
       />
        </div>
        <div className="cat mt-8">            
            <label htmlFor="amount" className="block">Amount:</label>
            <input
            className="w-full p-2 border-2 border-slate-400 rounded"
            type="text"
            placeholder="amount"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
        </div>
    
       <button className="px-6 w-fit max-w-fit block mx-auto text-sky-800 border-2 border-sky-800 active:translate-y-[-.2rem] rounded-md mt-6 py-1 border  text-xl  bg-white" type="submit">Submit</button>
    </form>
  )
}

export default ExpensesForm
