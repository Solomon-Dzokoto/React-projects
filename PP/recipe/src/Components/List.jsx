import React from 'react'
import { FaHeart } from 'react-icons/fa6';
import { useState } from 'react';
const List = ({recipe,count,toggleLike,isLiked}) => {
    
  return (
    <li key={recipe.id}>
            <figure>
            <img src={recipe.image} alt={recipe.name}/>
            <figcaption>
              <p>{recipe.name}</p>
              <span>
                <FaHeart
                onClick={() => toggleLike(recipe.id)}
                key={recipe.id}
                role='button'
                className='btn'
                style={{color:isLiked?"#ea4545":"white"}}
                />
              </span>
            </figcaption>
            </figure>
          </li>
  )
}

export default List
