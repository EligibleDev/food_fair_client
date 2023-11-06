import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMZYUOrPe3-99r-TCsvyQOWnOiCn_uswE",
    authDomain: "assignment-11-food-fair.firebaseapp.com",
    projectId: "assignment-11-food-fair",
    storageBucket: "assignment-11-food-fair.appspot.com",
    messagingSenderId: "713200036388",
    appId: "1:713200036388:web:f2f174278461dacb4186b1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
