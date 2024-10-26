import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export  const useCatData = () => {
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:['cat'], 
        queryFn : () => {
      return  axios.get('https://catfact.ninja/fact').then((res)=>res.data)
    }})
    if(isError)return<h1>This is the Error: {isError}</h1>
    if(isLoading)return<h1>Loading..</h1>

    const refetchData = () => {
        alert("data refetch")
        refetch();
    }

  return {data,refetchData }
}

