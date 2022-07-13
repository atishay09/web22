import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login2form from "./components/modal/Login2form";
import Registeruser from "./components/modal/Registeruser";
// import Sport from "./components/Sport";
// import Casino from "./components/Casino";
// import Slot from "./components/Slot";
// import Fantasy from "./components/Fantasy";
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  return (
    
    <>
      <BrowserRouter>
        <Login2form setIsOpen={setIsOpen} isOpen={isOpen} />
        <Registeruser />
        <Navbar isLogin={isLogin} showModal={showModal} />
        <Routes>
          <Route path="/" element={<Home isLogin={isLogin} showModal={showModal} />} />

          {/* <Route exact path="/sport" element={<Sport isLogin={isLogin}/>} />

          <Route exact path="/casino" element={<Casino />} />

          <Route exact path="/slot" element={<Slot />} />

          <Route exact path="/fantasy" element={<Fantasy />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
