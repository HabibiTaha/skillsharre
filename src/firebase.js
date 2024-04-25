import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD9dRFsCh-x0AffaUb4wvcnSN8NuflNCxg",
    authDomain: "skillswap-ab7b9.firebaseapp.com",
    projectId: "skillswap-ab7b9",
    storageBucket: "skillswap-ab7b9.appspot.com",
    messagingSenderId: "738694983178",
    appId: "1:738694983178:web:bb9d13dde2e66dc79ef9f3",
    measurementId: "G-CX6E9LLYP5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }

