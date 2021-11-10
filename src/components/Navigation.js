import React from 'react';
// import {Button, Card} from 'react-bootstrap';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

class Navigation extends React.Component {


  

  render(){
    
          return (
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Movies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={()=>{this.props.changePage("",undefined,true)}}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={()=>{this.props.changePage("search")}}>Search</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","danger",true)}}>Danger</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","Love",true)}}>Love</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","god",true)}}>God</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","chance",true)}}>Chance</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","race",true)}}>Race</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","harry potter",true)}}>Harry Potter</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","monster",true)}}>Monster</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","penguins",true)}}>Penguins</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","evil",true)}}>Evil</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","Frozen",true)}}>Frozen</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","ice age",true)}}>Ice Age</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","killer",true)}}>Killer</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","camera",true)}}>Camera</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","dragon",true)}}>Dragon</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","king",true)}}>King</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","wanted",true)}}>Wanted</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","shoot",true)}}>Shoot</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","famous",true)}}>Famous</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","history",true)}}>History</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","furious",true)}}>Furious</NavDropdown.Item>
                                  <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","range",true)}}>Range</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                   
                    </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;
