import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "api_key",
    authDomain: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#",
    measurementId:"#"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};