import React from "react";
import Gameslist from "./Gameslist";

const Leftsidebar = ({isLogin,toggle}) => {
  return (
    <div className={`leftsidebar  ${toggle?"active":""}`}>
      <div className="image">
        <img
          src="https://i0.wp.com/www.groovytakeon.com/wp-content/uploads/2016/04/HERE.jpg?ssl=1"
          alt="logo"
          className="img-fluid"
        />
      </div>
      {!isLogin?<div className="upcoming-fixture">
        <div className="menu_title">Upcoming Fixtures</div>
        <div className="hooper-vertical">
          <div className="center">
            <div className="carousel_vertical">
              <div className="pre">I'm a </div>
              <div className="change_outer">
                <div className="change_inner">
                  <div className="element">
                    <i className="fas fa-frog"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-dove"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-kiwi-bird"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-dragon"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-meteor"></i>
                  </div>
                  <div className="element">hi</div>
                  <div className="element">bye</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>:<div className="search active">
        <input type="text" className="input" placeholder="Search..."/>
        <button className="search_btn"><i className="fa fa-search"></i></button>
    </div>
      }
      <div className="menu_box">
        <div className="menu_title">All Sports</div>
        <div className="sports_cateogory">
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
          <Gameslist />
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
