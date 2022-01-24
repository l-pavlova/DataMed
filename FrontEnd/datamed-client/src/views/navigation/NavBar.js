import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logout } from "../../utils/authFunctions";
import "./NavBar.css";
const NavBar = ({ values, isSignedIn=false }) => {

    return (
        <Navbar className="color-nav" variant="light">
            <Container>
                <Navbar.Brand href="#home">DataMed - your portal to health</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {isSignedIn && <Navbar.Text>
                        Signed in as: <a href="#login">{values.username || "default"}</a>
                    </Navbar.Text>}
                </Navbar.Collapse>
                {isSignedIn &&<Nav.Link href="#" onClick={logout}>Logout</Nav.Link>}
            </Container>
        </Navbar>)
}

export default NavBar;
