import React from 'react';
import { FaSearch,FaRegBookmark} from 'react-icons/fa';



const Header = ({search,setSearch,count}) => {
 
  return (
    <header>
       <h2>YOUR FAVORITE RECIPE DISH</h2>
        <form
         onSubmit={(e)=> e.preventDefault()}
        >
        <div className="input__container">
        <input 
          type="text" 
          required
          autoFocus
          placeholder='Search for your favorite dish...'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}

        />
        <button 
         type="submit"
        
        >
        <FaSearch />
        </button>
        </div>
       </form>
       <div className="track">
       <FaRegBookmark
       className='bookmark'
       />
       <div className="num">{count}</div>
       </div>  
    </header>
  )
}

export default Header
