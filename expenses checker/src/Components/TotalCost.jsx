

const TotalCost = ({expenses}) => {
  const totalAmount =expenses.reduce((sum,expense)=>sum + parseFloat(Number(expense.amount)||0),0);
  return ( 
  <div className="mt-8 text-xl">
        Total Amount : ${totalAmount.toFixed(2) }
  </div>)  
}

export default TotalCost
