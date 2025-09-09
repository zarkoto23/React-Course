

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";



import { Routes, Route } from "react-router";


function App() {

  return (
    <div className="bg-gray-900">

    <Header/>



      <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/catalog' element={<h1>CatalogG</h1>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    <Route path='/pricing' element={<Pricing/>}/>




      </Routes>
    
    </div>
  );
}

export default App;
