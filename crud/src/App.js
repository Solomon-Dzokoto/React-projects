import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Navbar from './Pages/Navbar';

function App() {

  const client = new QueryClient({
    defaultOptions : {
      queries : {
        refetchOnWindowFocus: false,
      }
    }
  })
 
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
          </Routes>
        </Router>      
      </QueryClientProvider>
    </div>
  );
}

export default App;
