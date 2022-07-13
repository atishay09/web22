import React, { useState } from "react";
import Leftsidebar from "./Leftsidebar";

const Header = ({showModal ,isLogin}) => {
  const [toggle,settoggle] = useState(false)
  const togglesidebar = ()=>{
    settoggle(!toggle)
  }
  return (
    <>
      <div className="top_header d-flex justify-content-between">
        <div className="floating">
        <div>
          <div className="text-center">
          <marquee>

            Hurry up avail the amazing speacial bonus of 12% upto 1200. Don't
            miss out
          </marquee>
          </div>
          </div>
          <div>
            <img src="https://sitethemedata.com/v69/static/front/img/icons/speaker.svg" alt="" />
          </div>
        </div>
        <div className="login_form d-flex justify-content-between">
        <div>
        <button className="btn toggle-sidebar-btn" onClick={togglesidebar}><i className="fa-solid fa-bars"></i></button>
        </div>
        <div className="top_header_ls">
          <button type="button" className="btn button btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#registerusermodal">
            Register
          </button>
          <button type="button" className="btn button btn-warning mx-2" onClick={showModal}>
            Login
          </button>
          </div>
        </div>
      </div>
        <Leftsidebar toggle={toggle} isLogin={isLogin}/>
    </>
  );
};

export default Header;

