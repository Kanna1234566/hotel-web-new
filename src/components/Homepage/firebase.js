import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCRIfFk0XIRfHKcnIyFy9yc9zqE2zKaUc",
  authDomain: "hotel-db638.firebaseapp.com",
  projectId: "hotel-db638",
  storageBucket: "hotel-db638.appspot.com",
  messagingSenderId: "744207674905",
  appId: "1:744207674905:web:0f04e6cd932a2c1d43c488",
  measurementId: "G-YQBG38G6MK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

