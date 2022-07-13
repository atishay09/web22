import React,{useState} from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Login2form = ({isOpen,setIsOpen}) => {
    

    const [newNote, setnewNote] = useState({
        username: "",
        password: "",
      });
      const onChange = (e) => {
        setnewNote({ ...newNote, [e.target.name]: e.target.value });
      };
    

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsOpen(false);
  }
  return (
    <>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={newNote.username}
                    required
                    placeholder="Enter Username"
                    autoComplete="username"
                  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={onChange}
                    value={newNote.password}
                    required
                    minLength={4}
                    placeholder="Password"
                  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Modal.Footer>
          <button className="btn btn-warning button" onClick={hideModal}>Cancel</button>
          <button type="submit" className="btn btn-warning button">Login</button>
        </Modal.Footer>
</Form>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default Login2form