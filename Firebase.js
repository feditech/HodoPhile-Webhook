import { initializeApp } from "firebase/app";

import { getDatabase, ref, onValue, child, push, get } from "firebase/database";
import { getStorage, ref as imageRef } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDStAWCVOggiTu3uVXvdEYIZ-2O4E4I_Q0",
    authDomain: "hodophile-aa7c8.firebaseapp.com",
    projectId: "hodophile-aa7c8",
    storageBucket: "hodophile-aa7c8.appspot.com",
    messagingSenderId: "250226856708",
    appId: "1:250226856708:web:8350bfd557059a8eab3651"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { getDatabase, ref, onValue, child, push, get, getStorage, imageRef };


