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
    <Nav.Link href="#Drug interaction">RNS Service</Nav.Link>
    <Nav.Link href="#LNewsink">News</Nav.Link>
    <Nav.Link href="#Drug_interaction">Medical service</Nav.Link>
    <Nav.Link href="#Medical_service">Drug Interaction</Nav.Link>
    <Nav.Link href="#Symptom checker">Symptom Checker</Nav.Link>
    <Nav.Link href="#About_us">About Us</Nav.Link>
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


