import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Home.css'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='home' >
            <Carousel >
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='heading' >Welcome to my travel guide website</h3>
                        <p className='heading' >I will always try my level best to give you a adventurus journey. i am always there to help you for your trevel journey </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1600074169098-16a54d791d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >I will be very happy to help you to have an amazeing journey </h3>
                        <p >if you want me to be your tour guide . mail me at least 2 weeks befour you tour. i will give you my appoinment  so that you can have much time for your tour</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/mountaineering-picture-id483045669?b=1&k=20&m=483045669&s=170667a&w=0&h=lgKJD8HRMIgVCgH3nMDKjUAhkPqC6a8njKZxySFlsaE="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='heading' >i wil do my best to give you the best experince during your journey</h3>
                        <p className='heading' >the touriest placaes i cover is given below. click on check out button to book me to help to help you to have a wonderful journey </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* ----------------- Services section ---------------------*/}
            <Services></Services>
        </div>
    );
};

export default Home;