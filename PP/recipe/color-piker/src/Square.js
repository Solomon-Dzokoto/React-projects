 import React from 'react'

const Square = ({colorValue,hexValue,darkText}) => {
  return (
    <section 
    className='square'
    style={{backgroundColor: colorValue,
        color:darkText?"#000":"gray"
    }}
    >
      <h2>{colorValue?colorValue:"Empty Value"}</h2>
      <small>{hexValue?hexValue:null}</small>
    </section>
  )
}

Square.defaultProps ={
  colorValue:"Empty Color Value"
}
export default Square
