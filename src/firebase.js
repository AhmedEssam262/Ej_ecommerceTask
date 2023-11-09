import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvE4jlqPe3qA8EOkiMvO6Sv_yWQ8_yyF0",
    authDomain: "imagesfinal.firebaseapp.com",
    projectId: "imagesfinal",
    storageBucket: "imagesfinal.appspot.com",
    messagingSenderId: "1009681723416",
    appId: "1:1009681723416:web:580fa5142b55d1c356d36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);