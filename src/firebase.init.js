// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChBD778HdWZZy20s3hGOztsa4dQWHx5Qg",
  authDomain: "practice-work-1eae4.firebaseapp.com",
  projectId: "practice-work-1eae4",
  storageBucket: "practice-work-1eae4.firebasestorage.app",
  messagingSenderId: "242217443042",
  appId: "1:242217443042:web:ec0c2ce0f656f142f048bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
