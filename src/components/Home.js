import React from "react";
// import Centercomponent from "./Centercomponent";
import Header from "./Header";
// import Rightsidebar from "./Rightsidebar";

const Home = ({showModal,isLogin}) => {
  return (
    <>
      <div className="main_container">
        {/* <Leftsidebar isLogin={isLogin}/> */}
        <div className="center_component d-flex flex-column">
          <Header showModal={showModal} isLogin={isLogin}/>
          <div className="d-flex main_right_component">
            {/* <Centercomponent  isLogin={isLogin} showModal={showModal}/> */}
            {/* <Rightsidebar showModal={showModal}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
