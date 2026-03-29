
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaiP357SClEvOcQEm5Rz-X_9X1iXGrqic",
  authDomain: "leorixstore.firebaseapp.com",
  projectId: "leorixstore",
  storageBucket: "leorixstore.firebasestorage.app",
  messagingSenderId: "313859928598",
  appId: "1:313859928598:web:2c5e728431bdf52a39bb37",
  measurementId: "G-M1GJX0VW9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
