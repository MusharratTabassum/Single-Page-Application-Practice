import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "red"
    // }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home" className="logos"><h1>GURUS<span className="red">'</span></h1></Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink activeStyle={activeStyle} to="/home" className="items">
                            <li>Home</li>
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/courses" className="items">
                            <li>Courses</li>
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about" className="items">
                            <li>About</li>
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact" className="items">
                            <li>Contact us</li>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>




        </div>
    );
};

export default Header;