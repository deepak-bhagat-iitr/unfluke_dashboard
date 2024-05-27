// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCV1rBv1xzkcTynjcbMWec2R4V2gqiiQog",
    authDomain: "visionvow-26c0b.firebaseapp.com",
    projectId: "visionvow-26c0b",
    storageBucket: "visionvow-26c0b.appspot.com",
    messagingSenderId: "336596359245",
    appId: "1:336596359245:web:0882bb6c11344f9efc6404",
    measurementId: "G-XTQYCR25ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
