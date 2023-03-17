import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhJbCE4ISW05hngWC8enziNuve5BaUWjk",
  authDomain: "cypherchats.firebaseapp.com",
  projectId: "cypherchats",
  storageBucket: "cypherchats.appspot.com",
  messagingSenderId: "988172374301",
  appId: "1:988172374301:web:16df67315b348d3ce251f4",
  measurementId: "G-836CPEKQKJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();