import './Card.css'

const Card = ({children,className}) => {
  return (
    <article className="card">
      {children}
    </article>
  )
}

export default Card
