// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR3pkfCT4-vQfPOL4Mhh0QncB60fiRh6Q",
  authDomain: "adventure-diary-63607.firebaseapp.com",
  projectId: "adventure-diary-63607",
  storageBucket: "adventure-diary-63607.appspot.com",
  messagingSenderId: "324594701705",
  appId: "1:324594701705:web:ea107417b39656166bfd58",
  measurementId: "G-BV393LJNRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;