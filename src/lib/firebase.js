// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnzI1a8l2PRX2wa1tWyViLFjMeiyoOYPg",
    authDomain: "healthe-71a81.firebaseapp.com",
    projectId: "healthe-71a81",
    storageBucket: "healthe-71a81.appspot.com",
    messagingSenderId: "75190398968",
    appId: "1:75190398968:web:96c535781f28adfc1ff00d",
    measurementId: "G-70NG06N5JT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)