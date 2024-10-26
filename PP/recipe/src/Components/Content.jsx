import React from 'react';
import List from './List';
const Content = ({count,setCount,recipes, likedRecipes,toggleLike}) => {
  // create a clickable button
 
  
  return (
    <main>
      <div className="body__container">
        {recipes.length?(
            <ul>
            {recipes.map((recipe) => (
              <List
              recipe={recipe}
              count={count}
              setCount={setCount}
              likedRecipes={likedRecipes}
              toggleLike={toggleLike}
              isLiked={likedRecipes[recipe.id] || false} 
              />
            ))}
            </ul>
        ):(
          <h1 style={{color:"red",padding:"10rem 50% "}}>EMPTY</h1>
        )}
       
      </div>
    </main>
  )
}

export default Content
