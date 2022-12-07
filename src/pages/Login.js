import {Button, Form, Card} from 'react-bootstrap';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../App';
import { EmailContext } from '../App';


//Login page, use context from parent App.js.
export default function Login(props) {
    const navigate = useNavigate()
    const {name, setName} = useContext(NameContext);
    const {email, setEmail} = useContext(EmailContext);
    return (
        <div className='Login-form-container'>
            <Form className="Login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" 
                    onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
            
                <Button variant="primary" 
                    type="button" onClick={() => navigate('./welcome')}>
                    Submit
                </Button>
            </Form>
        </div>
        
      )
}