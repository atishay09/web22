import React, { useState } from "react";

const Registeruser = () => {
    const [newNote,setnewNote] = useState({
        name:"",username:"",password:"",confpassword:"",city:"",number:"",refcode:""
    })
    const onChange = (e)=>{
        setnewNote({...newNote,[e.target.name]:e.target.value})
    }

const handleSubmit = async(e) =>{
        e.preventDefault();
}
  return (
    <>
        <div className="modal fade" id="registerusermodal" tabIndex="-1" aria-labelledby="registeruser" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">REGISTER</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value = {newNote.name}
            required
            minLength={3}
            placeholder = 'Enter Full Name'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username *
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            onChange={onChange}
            value = {newNote.username}
            required
            placeholder = 'Enter Username'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            New Password *
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value = {newNote.password}
            required
            minLength={4}
            placeholder = 'New Password'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confpassword" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confpassword"
            name="confpassword"
            onChange={onChange}
            value = {newNote.confpassword}
            required
            minLength={4}
            placeholder = 'Confirm Password'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
           City *
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={onChange}
            value = {newNote.city}
            required
            placeholder = 'Enter City'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
           Mobile Number *
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            onChange={onChange}
            value = {newNote.number}
            required
            maxLength={10}
            minLength={10}
            placeholder = 'Enter Mobile Number'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="refcode" className="form-label">
           Referrer Code
          </label>
          <input
            type="text"
            className="form-control"
            id="refcode"
            name="refcode"
            onChange={onChange}
            value = {newNote.refcode}
            placeholder = 'Enter Refferer Code'
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        {/* <button
          type="submit"
          className="btn btn-primary modal-footer"
        >
          REGISTER
        </button> */}
      <div className="modal-footer">
        <button type="submit" className="btn button btn-warning">Register</button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Registeruser