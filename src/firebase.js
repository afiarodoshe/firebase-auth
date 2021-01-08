import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
        
apiKey: "AIzaSyDdowlj798WZGpAWhg7oj36YCDJb2q4U2I",
authDomain: "fir-auth-development-ac942.firebaseapp.com",
projectId: "fir-auth-development-ac942",
storageBucket: "fir-auth-development-ac942.appspot.com",
messagingSenderId: "355084426889",
appId: "1:355084426889:web:5c1ffd5f2aec451c6eb058"

});

const auth = app.auth();
export {auth};
export default app;