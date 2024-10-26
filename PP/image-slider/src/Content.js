import React from 'react'
import { useState } from "react";
import './index.css'
const Content = () => {
  const [imageIndex,setImageIndex]=useState(0)
  
  const  images=[
   {url:'/Assets/img1.jpeg'},
   {url:'/Assets/img2.jpeg'},
   {url:'/Assets/img3.jpeg'},
   {url:'/Assets/img4.jpeg'},
   {url:'/Assets/img5.jpeg'},
   {url:'/Assets/img6.jpeg'},
   {url:'/Assets/img7.jpeg'},
   {url:'/Assets/img8.jpeg'},
   {url:'/Assets/img9.jpeg'},
   {url:'/Assets/img10.jpeg'},
   {url:'/Assets/img11.jpeg'},
   {url:'/Assets/img12.jpeg'},
   {url:'/Assets/img13.jpeg'},
   {url:'/Assets/img14.jpeg'},
   {url:'/Assets/img15.jpeg'},
   {url:'/Assets/img16.jpeg'},
  
 ]
 const shows = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition:'center', 
  backgroundRepeat: 'no-repeat',
  borderRadius: '1rem',
  backgroundImage:`url(${images[imageIndex].url})`,
}
 const container={
  marginTop:'3rem',
  background:'blue',
  position:'relative',
  borderRadius:' 1rem',
  width:'100%',
  backgroundColor:'white',
  height:' 100%'
}
 const handlePrev = () =>{
   const isPrevIndex = imageIndex === 0;
   const next = isPrevIndex? images.length-1: imageIndex -1;
   setImageIndex(next)
 }
 const handleNext = () =>{
   const isNextIndex = imageIndex === images.length-1;
   const next = isNextIndex? 0 : imageIndex + 1;
   setImageIndex(next)
 }
 const goToImage = (imageIndex) =>{
  setImageIndex(imageIndex)
 }
  return (
   <main>
      <h1>IMAGE SLIDER</h1>
      <div className="container" style={container}>
       <div className="image" style={shows}>
         <div className="btn prev" onClick={handlePrev}> &larr;  </div>
         <div className="btn next" onClick={handleNext}> &rarr;  </div>
       </div>
       <div className="pagination">
          {images.map( (image,imageIndex) => (
            <div key={imageIndex} className='dots ' onClick={()=>goToImage(imageIndex)}>	&#9679;</div>
          ))}
         </div>
         <small>{`Image: ${imageIndex+1}`}</small>
      </div>  
    </main>
  )
}

export default Content
