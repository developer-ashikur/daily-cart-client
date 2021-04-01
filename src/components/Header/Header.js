import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/home' className='text-success' ><h2> <i>DAILY CART</i> </h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
                        <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
                        <Nav.Link>Deals</Nav.Link>
                        {
                            loggedInUser.isSignedIn ? <img src="https://i.ibb.co/kgpFNRh/Avatar-face.png" alt="" className='img-fluid' style={{height: '50px'}}/>
                            : <Nav.Link as={Link} to='/login' className='btn btn-success text-white'>Log In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;