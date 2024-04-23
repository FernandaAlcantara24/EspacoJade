import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC_8OoEYCLzbVqi88VsPQ-ol1g7QQ7TPz4",
  authDomain: "jade-app2.firebaseapp.com",
  projectId: "jade-app2",
  storageBucket: "jade-app2.appspot.com",
  messagingSenderId: "312504392753",
  appId: "1:312504392753:web:2c1ccb3c6c7cb2aee5c910"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
