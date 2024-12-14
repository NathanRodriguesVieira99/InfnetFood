import { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider} from './src/contexts/ThemeContext';
import { useCustomFonts } from './src/styles/fonts/fonts';

import Splash from './src/screens/Splash';
import Routes from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);


  const [fontesLoaded] = useCustomFonts();

  useEffect(() => {
    const prepareApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));  // Tempo de splash
      setIsSplashVisible(false);
      SplashScreen.hideAsync();
    };

    if (fontesLoaded) {
      prepareApp();
    }
  }, [fontesLoaded]);

  return (
    <NavigationContainer>
      <ThemeProvider>
        {isSplashVisible ? (
          <Splash />

        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </NavigationContainer>
  );
}
