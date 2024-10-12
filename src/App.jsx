import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import  Dashboard  from './components/Dashboard'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Courses from './components/Courses'
import Mocktest from './components/Mocktest'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
// creating routes (npm install react-router-dom)
const router = createBrowserRouter (
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
     path:"/about",
     element: 
     <div>
      <Navbar />
      <About />
     </div>
    },
    {
    path: "dashboard",
    element: 
    <div>
      <Navbar />
      <Dashboard />
    </div> ,
    //nested routing
    children:[
      {
        path:'courses',
        element:<Courses />
      },
      {
        path:'mock-test',
        element:<Mocktest />
      },
      {
        path:'reports',
        element:<Reports/>
      }
    ]
    },
    {
      path:"/student/:id",
      element: 
      <div>
        <Navbar />
        <Params />
      </div>

    },
    {
      path:'*',
      element:<NotFound />
    }

  ]
)



function App() {

  return (
    <>
    
    <div>
      <RouterProvider router={router} />

    </div>
    </>
  )
}

export default App
