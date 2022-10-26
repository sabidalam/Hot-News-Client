import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.url.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUser(name, photoUrl);
                emailVerification();
                toast('Please Verify your email account');
                navigate('/login');
                toast.success('Account Created Successfully, PLease Login');
            })
            .catch(error => console.error(error))
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => {
            }).catch((error) => {
            });
    }

    const emailVerification = () => {
        verifyEmail()
            .then(() => {
            }).catch((error) => {
            });
    }


    const handleAccepted = event => {
        setAccept(event.target.checked)
    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to='/'>terms and Conditions</Link></>} />
                </Form.Group>
                <Button className='form-control' variant="primary" type="submit" disabled={!accept} >
                    SignUp
                </Button>
            </Form>

        </div>
    );
};

export default SignUp;