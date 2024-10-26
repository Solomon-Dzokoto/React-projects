import Product from "./Product"
import './shop.css'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'
const Shop = () => {
  const {filteredProduct}=useContext(ShopContext);

   
  return (
    <section className="shop">
       <main>
        <div className="shopTitle">
          <h1>Available Products</h1>
        </div>
        <div className="products">
             {
                filteredProduct.map((product)=> (
                    <Product key={product.id} product={product}/>
                ))
             }   
         </div>
       </main>
    </section>
  )
}

export default Shop
