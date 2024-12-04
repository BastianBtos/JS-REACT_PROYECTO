import './App.css';
import Home from './component/Home/Home.jsx';
import Footer from '../src/component/Footer/Footer.jsx';
import Header from '../src/component/Header/Header_1.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./component/About/About.jsx";
import History from "./component/History/History.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Products from "./component/Products/Products.jsx";
import ItemDetail from "./component/ItemDetail/ItemDetail.jsx";
import ProductsCategory from "./component/Category/Category.jsx";
import {Cart} from "./component/Cart/Cart.jsx";
function App() {

  return (
      <div className="font-kanit">
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path='/products/:productId' element={<ItemDetail/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/historia" element={<History/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/productos" element={<Products/>}/>
                  <Route path="/category/:categoryId" element={<ProductsCategory/>}/>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </div>
  )
}

export default App
