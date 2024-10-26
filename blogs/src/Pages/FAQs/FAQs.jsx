import data from "./data"
import './faqs.css'
import { useState } from "react"
const FAQs = () => {
  const [active,setActive]=useState(1);
     const handleId = (id) => {
       setActive(prevId=>prevId===id?null:id)
     }
  return (
    <section>
     <main className="container grid content-center min-h-full py-10">
      <h1 className="mb-4 text-2xl font-extrabold text-center">OUR MOST FREQUENTLY ASKED QUESTIONS</h1>
      <ul className=" grid gap-8 grid-cols-2">
       {
         data.map(item =>
           <li key={item.id}>
            <article className="article" onClick={()=>handleId(item.id)}>
              <h2 className="font-bold ">{item.ques}</h2>
              <p>{active===item.id && item.ans}</p>
            </article>
           </li>
          )
       }
      </ul>
     </main>
    </section>
  )
}

export default FAQs
