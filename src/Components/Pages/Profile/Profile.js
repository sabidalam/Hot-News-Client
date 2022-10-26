import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const handleSubmit = event => {
        event.preventDefault();

    }

    const handleNameChange = (event) => {
        const changeName = event.target.value;
        setName(changeName);

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control defaultValue={user?.photoURL} type="text" name='url' placeholder="photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" name='email' placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit"  >
                SignUp
            </Button>
        </Form>
    );
};

export default Profile;