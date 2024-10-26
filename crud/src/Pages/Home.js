import { useCatData } from "../hooks/useCatData";
import { useCounter } from "../hooks/useCounter";
import { Person } from "../components/Person";

const Home = () => {
    const {data,refetchData} = useCatData();
    const {state,increase,decrease,reset} = useCounter()

  return (
    <>
      <h1>Welcome</h1>
      <p>{data?.fact}</p>
      <button onClick={refetchData}>mutate</button>
          {state}
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button>
     <button onClick={reset}>reset</button>
     <Person 
      name={'Solomon'}
      email='solo@gmail.com'
      age={23}
      isMarried={false}
      friends={["Lydia","Emma","Prince","Elorm"]}
     />
    </>
)
}

export default Home
