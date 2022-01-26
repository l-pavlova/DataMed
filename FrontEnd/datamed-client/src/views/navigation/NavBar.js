import React from "react";
import { useNavigate } from "react-router";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logout } from "../../utils/authFunctions";
import "./NavBar.css";
const NavBar = ({ values, isSignedIn = false, isDoc=true }) => {

    const navigate = useNavigate();
    const handleLogout = () => {
        logout().then(() => {
            navigate("/register");
        });
    }
    return (
        <Navbar className="color-nav" variant="light">
            <Container>
                <Navbar.Brand href={ isDoc? `/${values.id}`: `/register`}>DataMed - your portal to health</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {isSignedIn && <Navbar.Text>
                        Signed in as: <a>{values.username || "doctor"}</a>
                    </Navbar.Text>}
                </Navbar.Collapse>
                {isSignedIn && <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>}
            </Container>
        </Navbar>)
}

export default NavBar;
