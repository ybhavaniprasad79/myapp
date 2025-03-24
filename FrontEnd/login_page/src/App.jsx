import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './pages/LoginPage'
import Home from './pages/Home'
import NavBar from "./components/Navebar"
import Createproudct from './components/CreateProduct'
import SellerProcutPage from "./pages/SellerProductPage"
import IndividualProduct from "./pages/IndividualProduct"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Createproudct/>}></Route>
            <Route path="/modify" element={<SellerProcutPage/>}></Route>
            <Route path="/pro" element={<IndividualProduct/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>

       </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
