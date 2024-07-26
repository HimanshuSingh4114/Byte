// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAub3FFpmYtX21Y-CoqTwo0JmgAbQ5nnAw",
    authDomain: "bytebaazaar.firebaseapp.com",
    projectId: "bytebaazaar",
    storageBucket: "bytebaazaar.appspot.com",
    messagingSenderId: "846213519884",
    appId: "1:846213519884:web:14f35f64211f72c35c6c29",
    measurementId: "G-19NBG8EC58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);


// const analytics = getAnalytics(app);