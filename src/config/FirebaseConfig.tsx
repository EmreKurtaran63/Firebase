// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyeHdGsa98WiujCEg2YUH3ScSscOsHmaw",
  authDomain: "fir-login-b48c5.firebaseapp.com",
  projectId: "fir-login-b48c5",
  storageBucket: "fir-login-b48c5.firebasestorage.app",
  messagingSenderId: "141574877036",
  appId: "1:141574877036:web:773b8b48310975aceecd49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);