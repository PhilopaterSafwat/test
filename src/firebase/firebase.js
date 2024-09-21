import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCwCBgkQjHt3Z8R26cfYmU37uK-BHHNEXY",
    authDomain: "felo-e84c7.firebaseapp.com",
    projectId: "felo-e84c7",
    storageBucket: "felo-e84c7.appspot.com",
    messagingSenderId: "139867559463",
    appId: "1:139867559463:web:279f99d777369ad685a002",
    measurementId: "G-E7D7P3J041"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
