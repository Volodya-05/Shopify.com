import React from 'react';
import './App.css';
import AllProducts from './pages/allProducts/all';
import Header from './pages/header/header';
import Home from './pages/home/homeImage/home';
import { Routes, Route, } from "react-router-dom";
import Option from './pages/productOption/option';
import Footer from './footer/Footer';
import LogIn from './pages/login/Login'
import Signup from './pages/login/createAccount/Signup';
import BascketController from './bascketController/Controller';
import { useDispatch } from 'react-redux';
import { getCart } from './redux/reducer';


function App() {
  const dispatch = useDispatch()
    dispatch(getCart(BascketController.arr))


    return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllProducts />} />
        <Route path='/Login' element={<LogIn />} />
        <Route path='/Login/signup' element={<Signup />} />
        <Route path={`/product:id`} element={<Option />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


//npx json-server --watch data/db.json --port 8000