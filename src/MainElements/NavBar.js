// import React from 'react'react
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const NavBar = () => {
    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">ShoppyStore</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Add Categories</Nav.Link>
              <Nav.Link href="#pricing">Add Managers</Nav.Link>
{/*                <Nav.Link href="#pricing"></Nav.Link> */}
            </Nav>

          </Navbar>
          </>

    )
}
export default NavBar;