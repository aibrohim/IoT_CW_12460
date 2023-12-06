// firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5K7SBPRipUBnf3AtNQcS8MvKlmN0FLgk",
  authDomain: "iotproj-fcd43.firebaseapp.com",
  databaseURL:
    "https://iotproj-fcd43-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotproj-fcd43",
  storageBucket: "iotproj-fcd43.appspot.com",
  messagingSenderId: "232369106106",
  appId: "1:232369106106:web:280b99f3f42453e22a6683",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
