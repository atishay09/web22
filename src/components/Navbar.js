
import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({showModal ,isLogin}) => {

  let location = useLocation()
  const navigate = useNavigate();
  const  navbtnClicked = (e)=>{
    if(isLogin){
      navigate(`/${e.target.id}`)
    }
    else{
      navigate("/")
      showModal()
    }
  } 

  // const isUserloggedin =()=>{
  //   if(isLogin){
  //     navigate('/sport')
  //   }
  //   else{
  //     navigate('/')
  //   }
  // }

  useEffect(() => {
  
    if(isLogin){
      navigate('/sport')
    }
    else{
      navigate('/')
    }
  }, [])
  
  return (
    <>
    <div className='top_navbar'>
<ul className="nav justify-content-center">
  <li className="nav-item">
    <p aria-current="page" id='sport' type='button' className={`nav-link ${location.pathname==="/sport"?"active":""} mx-2`} onClick={navbtnClicked} >Exchnage</p>
  </li>
  <li className="nav-item">
    <p aria-current="page" id='casino' type='button' className={`nav-link ${location.pathname==="/casino"?"active":""} mx-2`} onClick={navbtnClicked} >Live Casino</p>
  </li>
  <li className="nav-item">
    <p aria-current="page" id='slot' type='button' className={`nav-link ${location.pathname==="/slot"?"active":""} mx-2`} onClick={navbtnClicked} >Slot</p>
  </li>
  <li className="nav-item">
    <p aria-current="page" id='fantasy' type='button' className={`nav-link ${location.pathname==="/fantasy"?"active":""} mx-2`} onClick={navbtnClicked} >Fantasy Games</p>
  </li>

</ul>{
  isLogin?<div className="deposit_withdraw">
    <button className="btn btn-success button">Deposit</button>
    <button className="btn btn-danger button">Withdrawal</button>
</div>:<a href="#" target="_blank" className='download_apk'>
    <i className="fa fa-android" aria-hidden="true"> Download APK</i>
    </a>
}
    
</div>

    </>
  )
}

export default Navbar