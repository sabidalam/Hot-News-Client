import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import BrandCarousel from '../brandCarousel/BrandCarousel';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const provider = new GoogleAuthProvider();
    const { providerLogin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> < FcGoogle className='fs-4 mb-1'></FcGoogle> Login via Google</Button>
                <Button variant="outline-dark"> <FaGithub className='fs-4 mb-1'></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find us</h4>
                <ButtonGroup vertical className='w-100'>
                    <Button className='mb-2' variant="outline-secondary"> < FaFacebook className='fs-4 mb-1' /> FaceBook</Button>
                    <Button className='mb-2' variant="outline-secondary"> <FaTwitter className='fs-4 mb-1' /> Twitter</Button>
                    <Button className='mb-2' variant="outline-secondary"> <FaTwitch className='fs-4 mb-1' /> Twitch</Button>
                    <Button className='mb-2' variant="outline-secondary"> <FaWhatsapp className='fs-4 mb-1' /> Whatsapp</Button>
                    <Button className='mb-2' variant="outline-secondary"> <FaInstagram className='fs-4 mb-1' /> Instagram</Button>
                </ButtonGroup>
            </div>
            <div className='mt-4'>
                <h5>Brands</h5>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;