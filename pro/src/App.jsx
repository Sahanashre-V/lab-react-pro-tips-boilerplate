import React from "react";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Registration from "./Component/Registration";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/Registration" element={<Registration/>}>
          </Route>
          <Route exact path="*" element={<h1>404 Error!</h1>}></Route> 
          <Route exact path="/" element={<h1>Home</h1>}>
          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App