import useProducts from "../../context/useProducts"
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import './cart.css'
import {useNavigate} from 'react-router-dom'
import CartItem from "./CartItem";

const Cart = () => {
    const products = useProducts()
  const navigate=useNavigate();
  const {cartItems,getTotalCartAmount}=useContext(ShopContext);
  const total = getTotalCartAmount().toFixed(2)
  return (
    <main className="cart">
      <h1>Your Orders</h1>  
          <div className="cartItems">
            {
              products.map((product)=>{
              if(cartItems[product.id] !== 0){
                return <CartItem  key={product.id} product={product}/>
              }
              })
            }  
          <div className="checkout">
           <p>Subtotal: ${total} </p>
           <button onClick={()=> navigate('/')}>Continue Shopping</button>
           <button>Checkout</button>
          </div>
         </div>

    </main>
  )
}

export default Cart
