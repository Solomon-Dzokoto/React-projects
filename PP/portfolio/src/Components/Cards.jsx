import './Card.css'
import React,{ memo} from 'react'

const Cards = memo(({children,className,onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  )
})

export default Cards
