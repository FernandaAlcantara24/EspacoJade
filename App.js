import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Parisienne_400Regular } from '@expo-google-fonts/parisienne';
import * as SplashScreen from 'expo-splash-screen'; // Importe SplashScreen
import Routes from './src/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Parisienne_400Regular,
  });

  useEffect(() => {
    const init = async () => {
      await SplashScreen.preventAutoHideAsync(); // Impede o SplashScreen de se ocultar automaticamente
      // Faça qualquer inicialização ou carregamento de dados necessário aqui
      await SplashScreen.hideAsync(); // Oculta manualmente o SplashScreen após a inicialização
    };

    init();
  }, []);

  if (!fontsLoaded) {
    return null; // Renderize null enquanto as fontes não estiverem carregadas
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}
