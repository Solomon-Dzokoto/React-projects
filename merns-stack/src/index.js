import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home.jsx' 
import ErrorPage from './Pages/ErrorPage.jsx'
import PostDetail from './Pages/PostDetail.jsx'
import Register from './Pages/Register.jsx' 
import LogIn from './Pages/LogIn.jsx'
import UserProfile from './Pages/UserProfile.jsx'
import Author from './Pages/Author.jsx' 
import CreatePost from './Pages/CreatePost.jsx'
import CategoryPost from './Pages/CategoryPost.jsx'; 
import AuthorPost from './Pages/AuthorPost.jsx'
import Dashboard from './Pages/Dashboard.jsx' 
import EditPost from './Pages/EditPost.jsx'
import Logout from './Pages/Logout.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement: <ErrorPage />,
    children:[
      {index:true,element:<Home />},
      {path:'posts/:id',element:<PostDetail />},
      {path:'register',element:<Register />},
      {path:'login',element:<LogIn />},
      {path:'profile/:id',element:<UserProfile />},
      {path:'authors',element:<Author />},
      {path:'create',element:<CreatePost />},
      {path: 'posts/categories/:category', element: <CategoryPost /> }, 
      {path:'posts/users/:id',element:<AuthorPost />},
      {path:'myposts/:id',element:<Dashboard />},
      {path:'posts/:id/edit',element:<EditPost />},
      {path:'logout',element:<Logout />},     
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


