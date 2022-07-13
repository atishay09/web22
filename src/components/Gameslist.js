import React , { useState }from "react";

const Gameslist = () => {

 
    const [show , setshow] = useState(false)
    const dispAns = () =>{
        setshow(!show)
        
    }
  return (
    <>
      <div className='main-head'>
    <div className='main-heading'>
    {
      show?<h6 style={{'backgroundColor' : '#282c34','color':'#868b94'}} onClick={dispAns} ><i className="fa fa-futbol-o mx-2" aria-hidden="true"></i>FootBall</h6>:<h6 onClick={dispAns} ><i className="fa fa-futbol-o mx-2" aria-hidden="true"></i>FootBall</h6>
    }
        {/* <h6 className="game_name" onClick={dispAns} >
        <i className="fa fa-futbol-o" aria-hidden="true"></i> Football </h6>
         */}
    </div>
    {show && <p>football 1</p>}
    </div>
    </>
  );
};

export default Gameslist;
