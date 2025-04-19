import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSlICCBvE6cVtq0hKf_c-6jfXp-teTsmQ",
    authDomain: "donornest.firebaseapp.com",
    projectId: "donornest",
    storageBucket: " ",
    messagingSenderId: "133038551639",
    appId: "1:133038551639:web:5128df6e3ebcf40b906912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app; 