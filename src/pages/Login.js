import {Button, Form, Card} from 'react-bootstrap';
import React from 'react';
import {createContext} from "react";
import { useNavigate } from 'react-router-dom';

export let globalName = createContext('Name');
export let globalEmail = createContext('Email@gmail.com');


export default function Login(props) {
    const navigate = useNavigate()
    return (
        <div className='Login-form-container'>
            <Form className="Login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" onChange={(e) => globalName = e.target.value} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => globalEmail = e.target.value} />
                </Form.Group>
            
                <Button variant="primary" 
                    type="button" onClick={() => navigate('./welcome')}>
                    Submit
                </Button>
            </Form>
        </div>
        
      )
}


/*
<Button variant="primary" 
                    type="button" onClick={() => navigate('./welcome')}>
                    Submit
                </Button>
*/