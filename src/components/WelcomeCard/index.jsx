import { Image, View, Text } from 'react-native';
import InfnetLogo from '../../assets/logo/infnet_logo.png';
import { styles } from './styles';

export const WelcomeCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={InfnetLogo}
        style={{
          width: 180,
          height: 180
        }}
      />
      <View style={styles.welcome}>
        <Text style={styles.title}>
          Bem vindo ao InfnetFood!
        </Text>
      </View>
    </View>
  );
};