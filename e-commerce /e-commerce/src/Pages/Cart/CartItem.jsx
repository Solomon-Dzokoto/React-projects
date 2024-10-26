import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'

const CartItem = ({product}) => {
    const {cartItems,removeFromCart,addToCart,updateCartAmountCount}=useContext(ShopContext);
    const {id,image,price,title} = product
 
  return (
    <div className='cartItem'>
      <img src={image} alt={title}/>
       <div className="description">
        <h4>{title}</h4>
        <p>${price}</p>
        <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=> updateCartAmountCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
       </div>
    </div>
  )
}

export default CartItem
