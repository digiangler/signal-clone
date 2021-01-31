import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGyzVJvMQtigCcL_F0Gzbq6gYYQBzFOSc",
  authDomain: "signal-clone-50a7a.firebaseapp.com",
  projectId: "signal-clone-50a7a",
  storageBucket: "signal-clone-50a7a.appspot.com",
  messagingSenderId: "16113955173",
  appId: "1:16113955173:web:82ce78330419423181318c",
  measurementId: "G-KMQLJ0Q5GZ",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
