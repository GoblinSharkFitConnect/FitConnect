import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Fit Connect</Navbar.Brand>
        <Nav className="me-auto">
          <BrowserRouter>
            <Nav.Link href="createworkout">Create Workout</Nav.Link>
          </BrowserRouter>
          <Nav.Link href="dashboard">My Workouts</Nav.Link>
          <Nav.Link href="logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
