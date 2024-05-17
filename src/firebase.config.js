// Importar os módulos necessários do Firebase e do AsyncStorage
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configurações do seu aplicativo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_8OoEYCLzbVqi88VsPQ-ol1g7QQ7TPz4",
  authDomain: "jade-app2.firebaseapp.com",
  projectId: "jade-app2",
  storageBucket: "jade-app2.appspot.com",
  messagingSenderId: "312504392753",
  appId: "1:312504392753:web:2c1ccb3c6c7cb2aee5c910"
};

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a autenticação com persistência usando AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };
