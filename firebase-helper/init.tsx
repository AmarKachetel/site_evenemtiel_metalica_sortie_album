import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyC5HnHwt8fbLpGVnWn7holuzTjZTTIQZ20",
authDomain: "lab-201-amar.firebaseapp.com",
projectId: "lab-201-amar",
storageBucket: "lab-201-amar.appspot.com",
messagingSenderId: "102676706880",
appId: "1:102676706880:web:50afd7c6bd6c712242d1a5",
measurementId: "G-T3HMR46V56",
databaseURL: "https://lab-201-amar-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;