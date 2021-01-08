import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
        
    apiKey: "AIzaSyBBgoTBliWFPpyUu09ywP-7PDJ39FiAMVI",
    authDomain: "fir-auth-development-52f30.firebaseapp.com",
    projectId: "fir-auth-development-52f30",
    storageBucket: "fir-auth-development-52f30.appspot.com",
    messagingSenderId: "577386891557",
    appId: "1:577386891557:web:07c1c26cce29a80c0bb2cc"
});

const auth = app.auth();
export {auth};
export default app;