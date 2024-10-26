import { useEffect,useState } from "react"

const useProducts = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const retrievedData =async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                if(!response) throw new Error('could not retrieve data')
                const data = await response.json()
              setProducts(data)
            }catch(err){
                console.error(err.message)
            }
         
        }
        retrievedData()
    },[])
   
  return products;
}

export default useProducts
