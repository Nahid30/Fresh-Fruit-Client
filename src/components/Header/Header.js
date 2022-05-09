import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (

        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Fresh Fruits
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Inventories</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <div className='d-flex align-items-center' >
                                        
                                        <Nav.Link as={Link} to="manageitem">Manage Items</Nav.Link>
                                        <Nav.Link as={Link} to="myitem">My Items</Nav.Link>
                                        <Nav.Link as={Link} to="addnewitem">Add Item</Nav.Link>

                                        <span className='text-danger p-2 mt-2'>{user?.displayName}</span>
                                        <button onClick={handleSignOut} className=' btn btn-danger  rounded '>Sign Out</button>
                                    </div>
                                    
                                    :
                                    <>
                                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="signup">SignUp</Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;