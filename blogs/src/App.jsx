// import { useState } from 'react'
import Home from "./Pages/Home/Home.jsx"
import Layout from "./Layout/Layout"
import Products from "./Pages/Products/Products.jsx"
import FAQs from "./Pages/FAQs/FAQs.jsx"
import Testimonials from "./Pages/Testimonials/Testimonials.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import { Routes,Route } from "react-router-dom"
import Error from "./Layout/Error.jsx"
import './style/index.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='products' element={<Products/>}/>
           <Route path='testimonials' element={<Testimonials/>}/>
           <Route path='contacts' element={<Contact/>}/>
           <Route path='faqs' element={<FAQs/>}/>
           <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
