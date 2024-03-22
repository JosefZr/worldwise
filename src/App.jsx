/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import PageNoteFound from "./pages/PageNoteFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"
import CityList from "./components/CityList";
import CountryList from './components/CountryList'
import City from "./components/City"
import Form from "./components/Form"

import { useState,useEffect } from "react";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsloading]= useState(true);
  
  const URL ="http://localhost:3000"

  useEffect(function(){
    async function fetchCities(){
      try{
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      }
      catch{
        alert('there is an error loading data ')
      } finally{
        setIsloading(false);
      }
    }
    fetchCities();
  },[]);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path='cities' element={<CityList cities={cities} isLoading = {isLoading}/>}/>
          <Route path='cities/:id' element={<City/>}/>
          <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>}/>
          <Route path='form' element={<Form />}/>
        </Route>
        <Route path="*" element={<PageNoteFound/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App