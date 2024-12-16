import { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { useCustomFonts } from './src/styles/fonts/fonts';


import Routes from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {


  const [fontesLoaded] = useCustomFonts();



  useEffect(() => {
    if (fontesLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontesLoaded])

  if (!fontesLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
          <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
