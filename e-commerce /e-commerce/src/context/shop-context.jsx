import { createContext } from "react";
import useProducts from "./useProducts";
import { useState,useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider= ({children}) => {
  const [inputValue,setInputValue] = useState("")
    const products=useProducts();
    const filteredProduct = products.filter((product => {
      return product.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
    }))
  const initialCart = () => {
    let cart = {}
    if(filteredProduct.length>0){
      for(let i=1 ;i< filteredProduct.length + 1;i++){
     cart[i]=0
    }
  }
    return cart
  }
 
  const [cartItems,setCartItems] = useState({})
  useEffect(()=>{
    if(products.length>0){
      setCartItems(initialCart())
    }
  },[products])
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
 const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
 }
 const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }
 const updateCartAmountCount = (newAmount,itemId) => {
  setCartItems((prev)=>({...prev,[itemId]:newAmount}))
 }

console.log(filteredProduct)
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = filteredProduct.find((product)=> product.id===Number(item));
        totalAmount+=cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }
 const contextValue={cartItems,removeFromCart,addToCart,updateCartAmountCount,getTotalCartAmount,filteredProduct,inputValue,setInputValue,products}

  return (
    <ShopContext.Provider value={contextValue} >
      {children}
    </ShopContext.Provider>
  )
}

