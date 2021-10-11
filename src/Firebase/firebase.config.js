import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDvKUTBpxOepXfbYvOTGufW0F-gDiQ1SH0",
    authDomain: "center-b1468.firebaseapp.com",
    projectId: "center-b1468",
    storageBucket: "center-b1468.appspot.com",
    messagingSenderId: "39246917716",
    appId: "1:39246917716:web:62575a590564113c29fdc1"
  };

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;