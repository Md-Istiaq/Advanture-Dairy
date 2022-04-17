import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="blogs">
          <h5>Difference between authorization and authentication</h5>
          <p>Authentication verifies who the user is.Authorization determines what resources a user can access.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication.Authentication is visible to and partially changeable by the user.Authorization isn’t visible to or changeable by the user.</p>
          <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
          <p>helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.Firebase Authentication can help you to implement the feature that a newbie can dream of, like doing email/SMS verification, letting users sign in/sign up.It saves a ton of time by providing a simple way to handle the sign-in/signup process.The best part is that it builds trust and increases the users’ base of your app that makes it more professional, better, and faster.Other available option for implementing Authorization are<br/>Multi-factor authentication.<br/>Certificate-based authentication.<br/>Biometric authentication<br/>Token-based authentication.</p>
          <h5>What other services does firebase provide other than authentication?</h5>
          <p>
          There are many services which Firebase provides other then authentication Most useful of them are:<br/>Cloud Firestore<br/>Cloud Functions<br/>Hosting<br/>Cloud Storage<br/>Google Analytics<br/>Predictions<br/>Cloud Messaging<br/>Dynamic Links<br/>Remote Config<br/>
          </p>
        </div>
    );
};

export default Blogs;