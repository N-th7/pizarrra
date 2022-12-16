// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCj6U-UZOXkGyOqagT0ubNaLakRFIg0oU",
  authDomain: "pizarra-colaborativa.firebaseapp.com",
  projectId: "pizarra-colaborativa",
  storageBucket: "pizarra-colaborativa.appspot.com",
  messagingSenderId: "190865261489",
  appId: "1:190865261489:web:d613ba2d6f8c81ab387390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db; 