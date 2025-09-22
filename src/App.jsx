import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Page/Home.jsx'
import Layout from './Layout/Layout.jsx'
import PageNotFound from './Page/PageNotFound.jsx'
import Categories from './Categori/Categories.jsx'
import Chat from './Chat/Chat.jsx'
import ProductDetails from './component/ProductDetails.jsx'
import Cart from './Cart/Cart.jsx'
import Profile from './Profile/Profile.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='/all-categories' element={<Categories/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/product-details' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>

          <Route path='*' element={<PageNotFound/>}/>
        
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
