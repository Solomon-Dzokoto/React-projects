import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import { ShopContextProvider } from './context/shop-context'
function App() {


  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </Router>
      </ShopContextProvider>
 
    </div>
  )
}

export default App
