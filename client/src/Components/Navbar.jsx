import React from 'react';
import render from 'react-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import '../style.css';

class Navigationbar extends React.Component {

render(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >All-Inclusive</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="I I I" id="collasible-nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item >Another action</NavDropdown.Item>
                        <NavDropdown.Item >Something</NavDropdown.Item>
                        
                        <NavDropdown.Item >Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                <Nav>
                    <NavDropdown title="Extra" id="collasible-nav-dropdown">
                        <NavDropdown.Item >Job opportunities</NavDropdown.Item>
                        <NavDropdown.Item >Become a Seller</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >About Us</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey={2} >
                        My Account
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}
}
export default Navigationbar;