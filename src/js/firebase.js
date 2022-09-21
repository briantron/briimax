import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDw9Rl5YYYyw_JJKgIjWyBHDmjWYgL_Ric",
    authDomain: "evertexgrupoempresarial.firebaseapp.com",
    projectId: "evertexgrupoempresarial",
    storageBucket: "evertexgrupoempresarial.appspot.com",
    messagingSenderId: "509350221361",
    appId: "1:509350221361:web:e1e8bc6e0e8768cafa2710",
    measurementId: "G-73YNR2EYKD"
}


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

