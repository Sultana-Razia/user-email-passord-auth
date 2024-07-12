// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlvS7jENRJrg7Paa4d2d0xHcXovW-Qhfs",
    authDomain: "user-email-password-auth-52f35.firebaseapp.com",
    projectId: "user-email-password-auth-52f35",
    storageBucket: "user-email-password-auth-52f35.appspot.com",
    messagingSenderId: "934564536301",
    appId: "1:934564536301:web:1136f9f149e57fe51751e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;