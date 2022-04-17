import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({place}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={place.img} />
             <Card.Body>
               <Card.Title>{place.place}</Card.Title>
               <Card.Title>{place.location}</Card.Title>
               <Card.Text>
                Local Guide:-{place.name}
                Guide Number:-{place.Number}
               </Card.Text>
               <Button variant="primary">Check Out</Button>
             </Card.Body>
           </Card>
        </div>
    );
};

export default Service;