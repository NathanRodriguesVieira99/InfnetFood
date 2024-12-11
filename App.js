import 'react-native-gesture-handler';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { Text } from 'react-native';

import Routes from './src/routes'

export default function App() {
  const [fontesLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontesLoaded) {
    return (
      <Text>Loading secundario....</Text>
    );
  }

  return (
    <Routes />
  );
}

