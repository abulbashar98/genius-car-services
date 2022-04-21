// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvv5EpRsOVKFyaS4-3X7v7LQRlU0VDhMA",
    authDomain: "genius-car-services-52c92.firebaseapp.com",
    projectId: "genius-car-services-52c92",
    storageBucket: "genius-car-services-52c92.appspot.com",
    messagingSenderId: "29716294212",
    appId: "1:29716294212:web:20d0b6577704ab4855aa11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;