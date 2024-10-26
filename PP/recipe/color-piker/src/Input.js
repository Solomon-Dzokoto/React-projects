import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,setColorValue,setHexValue,darkText,setDarkText}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      <label>Add Color Name</label>
      <input 
      autoFocus
      placeholder='Add color name'
      required
      type="text" 
      value={colorValue}
      onChange={(e)=>{
        setColorValue(e.target.value)
        setHexValue(colorNames(e.target.value))
      }}
      />
       <button 
       type="button"
       onClick={()=>setDarkText(!darkText)}
       >
        Toggle text color
       </button>
    </form>
  )
}

export default Input
