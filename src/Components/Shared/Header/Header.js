import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Darkmode from '../../Darkmode/Darkmode';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none' to='/'>Hot News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none text-secondary me-2' to="/">All News</Link>
                            <Link className='text-decoration-none text-secondary'>Category</Link>
                        </Nav>

                        <Nav>
                            {
                                user?.email ?
                                    <>
                                        <span className='mx-2 mt-2' to="">{user?.displayName}</span>
                                        <Link to='/profile'>
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        className='mt-1'
                                                        roundedCircle
                                                        src={user?.photoURL}
                                                        style={{ height: '30px' }}>
                                                    </Image>
                                                    :
                                                    <FaUser className='mt-2'></FaUser>
                                            }
                                        </Link>
                                        <Button onClick={handleLogout} className='ms-2' variant="primary" size="sm"><Link className='text-decoration-none text-light' to='/login'>LogOut</Link></Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none text-secondary mx-2' to="/login">Login</Link>
                                        <Link className='text-decoration-none text-secondary' to="/signUp">SignUp</Link>
                                    </>
                            }
                        </Nav>
                        <div className='d-lg-none mt-2'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;