import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA23_UFvneM3wKri9k5tR2yj6PLy_V7TdQ",
  authDomain: "house-marketplace-c8e6f.firebaseapp.com",
  projectId: "house-marketplace-c8e6f",
  storageBucket: "house-marketplace-c8e6f.appspot.com",
  messagingSenderId: "686022425067",
  appId: "1:686022425067:web:ae570237a6030cfef181ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
