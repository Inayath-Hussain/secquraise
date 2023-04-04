// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBunV5VKHo7CMvWRZJvii-9e3vOWo1eoNo',
    authDomain: 'secq-fb0aa.firebaseapp.com',
    projectId: 'secq-fb0aa',
    storageBucket: 'secq-fb0aa.appspot.com',
    messagingSenderId: "102223134719",
    appId: '1:102223134719:web:3576f54b4d14763cd071ca'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();