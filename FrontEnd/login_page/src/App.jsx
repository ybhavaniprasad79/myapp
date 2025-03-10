import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './pages/LoginPage'
import Home from './pages/Home'
import Navbar from './pages/Navebar'
import Createproudct from './components/CreateProduct'
import SellerProcutPage from "./pages/SellerProductPage"
import IndividualProduct from "./pages/IndividualProduct"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Createproudct/>}></Route>
            <Route path="/modify" element={<SellerProcutPage/>}></Route>
            <Route path="/cart" element={<IndividualProduct />}></Route>
       </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
