import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaSistrix } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

 export default class NavPart extends React.Component {
  render() {
    return (
    <div>
<Navbar expand="lg" fixed="top" >
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#Drug interaction">Drug interaction</Nav.Link>
    <Nav.Link href="#LNewsink">LNewsink</Nav.Link>
    <Nav.Link href="#Drug_interaction">Drug interaction</Nav.Link>
    <Nav.Link href="#Medical_service">Medical service</Nav.Link>
    <Nav.Link href="#Symptom checker">Symptom checker</Nav.Link>
    <Nav.Link href="#About_us">About us</Nav.Link>
    <Nav.Link href="#About_us"><FaSistrix/></Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
<div className="registerAndLogin">
  <p>Register</p>
  <p>Login</p>
</div>
  </div>
  )
  }
}


