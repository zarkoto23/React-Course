import { Routes, Route } from "react-router";


import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";
import NotFound from "./components/NotFound";
import Catalog from "./components/Catalog";
import ProductDetails from "./components/ProductDetails";



function App() {

  return (
    <div className="bg-gray-900">
 
    <Header/>

      <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/catalog' element={<Catalog/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    <Route path='/pricing/*' element={<Pricing/>}/>
    <Route path='/catalog/:productId' element={<ProductDetails/>}/>


    <Route path='*' element={<NotFound/>}/>



      </Routes>
    
    </div>
  );
}

export default App;
