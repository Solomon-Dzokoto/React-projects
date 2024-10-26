import React from "react";

   const Content = ({search,setSearch,handleCheck}) => {

    return(
      <main>
        <form  onSubmit={()=>handleCheck}>
        <div className="card">
          EMPTY COLOR
        </div>
        <input 
        aria-label="Search color"
        type="text"
        required
        placeholder="Add color name"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
        />
        </form>
       
      </main>
    )
   }

   export default Content
