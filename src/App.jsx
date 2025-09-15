import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
        
        </Route>

      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
