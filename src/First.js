import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const First = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">awwwards</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Products</Nav.Link>
                            <NavDropdown title="Info Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Prices</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
