// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT2IkKTnZuQiq_jgn38zlpLg6UGhPD7Nw",
  authDomain: "bellfordapartment.firebaseapp.com",
  projectId: "bellfordapartment",
  storageBucket: "bellfordapartment.appspot.com",
  messagingSenderId: "240829277810",
  appId: "1:240829277810:web:fad442ca560aa583dcc4eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app