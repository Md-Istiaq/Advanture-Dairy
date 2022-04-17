import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div>
            <h1>Thank you for choseing meas you Guide</h1>
            <h3>please provide me your information</h3>
            <Form  className='w-25 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="password" placeholder="PhoneNumber" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Howe many days you will spend</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">four</option>
                    <option value="5">Five</option>
                    <option value="6">six</option>
                    <option value="7">seven</option>
                  </Form.Select>
                <Button variant="primary" type="submit">
                Submit
                </Button>
               
            </Form>
        </div>
    );
};

export default CheckOut;