import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({place}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={place.img} />
             <Card.Body>
               <Card.Title>{place.location}</Card.Title>
               <p>{place.details}</p>
               <Card.Text>
                Guide Number:-{place.Number}
               </Card.Text>
               <Link className='button' to="/checkout">Check Out</Link>
             </Card.Body>
           </Card>
        </div>
    );
};

export default Service;