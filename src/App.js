import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header";
import './assets/css/joeblog.css';
import Product from "./component/Product";
import Category from "./component/Category";
import Users from "./component/Users";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
      <Router>
        <Header />       
        <main>
          <Routes>
          <Route path="/users" element={<Users />} /> 
          <Route path="/product" element={<Product />} />  
          <Route path="/category" element={<Category />} /> 
          </Routes>
        </main>     
      </Router>
    );
  }

export default App;
