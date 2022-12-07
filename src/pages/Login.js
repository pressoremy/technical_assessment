import {Button, Form, Card} from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    return (
        <div className='Login-form-container'>
            <Form className="Login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            
                <Button variant="primary" 
                    type="button" onClick={() => navigate('./welcome')}>
                    Submit
                </Button>
            </Form>
        </div>
        
      )
}

export default Login;