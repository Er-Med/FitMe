import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAvnj6RAtiJgiiLjsHPI75JkIyhGOCLSlY",
  authDomain: "fitme-12678.firebaseapp.com",
  projectId: "fitme-12678",
  storageBucket: "fitme-12678.appspot.com",
  messagingSenderId: "718284441379",
  appId: "1:718284441379:web:39fed59d39122dd2862e96",
  measurementId: "G-SMY0FBV855"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);