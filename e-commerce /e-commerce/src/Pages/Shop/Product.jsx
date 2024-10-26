
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'
import { useEffect } from 'react'
import scrollReveal from 'scrollreveal'

const Product = ({product}) => {
    const {image,title,id,price,description,category}=product
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  useEffect(()=>{
      scrollReveal().reveal('.product',{
        origin:'bottom',
        duration:1000,
        distance:'5rem',
        easing:'ease-in-out',
        reset:false,
        viewFactor:0.2
      })
  },[])
  return (
    <div className="product">
      <img src={image} alt={title}/>
      <div className="details">
      <h4>{title.length>30?`${title.substring(0,30)}...`:title}</h4>
      <p>{description.length>=100?`${description.substring(0,100)}...`:description}</p>
      <p>${price}</p>
      <button onClick={()=> addToCart(id)} className='addToCart'>Add to Cart {cartItemAmount>0&&<>({cartItemAmount})</>} </button>
      </div>
    
    </div>
  )
}

export default Product
