// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcUjCHAdDQ70aOb8bpBZc2Pap6t-xJoug",
  authDomain: "ema-jon-auth-route.firebaseapp.com",
  projectId: "ema-jon-auth-route",
  storageBucket: "ema-jon-auth-route.appspot.com",
  messagingSenderId: "806200968270",
  appId: "1:806200968270:web:575cf8d4d053427eae2f1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
