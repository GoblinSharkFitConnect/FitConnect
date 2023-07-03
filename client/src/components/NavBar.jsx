import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter} from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Navbar.Brand href=''>Fit Connect</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link href='/createworkout'>Create Workout</Nav.Link>
        <Nav.Link href='/dashboard'>My Workouts</Nav.Link>
        <Nav.Link href='/homepage'>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
