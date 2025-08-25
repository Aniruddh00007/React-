import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

import About from './components/Aboutt/About.jsx'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'


const router= createBrowserRouter([

  {
     path: '/',
      element : <Layout/>,
      children:[
        {
          path:"", 
          element : <Home />
        },

        {
          path:"about", 
          element : <About/>
        },
        {
          path:"contact",
          element : <Contact/>

        },
        {
          path:"user/:id",
          element :<User />
        },
        {
          path:"github",
          element :<GitHub/>
        }
        
      ]
      
      
    }

])

// nemethod to create a router with nested routes


//const router= createBrowserRouter(

//   createRoutesFromElements(

//     <Route path='/'element= {<Layout/>} >
    
//       <Route path='About' element={<About/>}/>
//       <Route path='Home' element={<Home />}/>
//       <Route path='Contact' element={<Contact/>}/>

// </Route>
// ))


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>

  </StrictMode>,
)
