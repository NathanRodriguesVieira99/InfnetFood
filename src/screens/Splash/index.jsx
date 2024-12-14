import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image, View } from 'react-native';
import LottieView from 'lottie-react-native';
import './styles';
import InfnetLogo from '../../assets/logo/infnet_logo.png';
import BurgerLoadingAnimation from '../../../assets/burger_loading_animation.json';
import { styles } from './styles';

const size = Dimensions.get('window').width * 0.5;

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 6000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={InfnetLogo}
        style={{
          width: 150,
          height: 150,

        }}
      />
      <LottieView
        source={BurgerLoadingAnimation}
        style={{
          width: size,
          height: size
        }}
        resizeMode="contain"
        loop
        autoPlay
      />
    </View>
  );
}
