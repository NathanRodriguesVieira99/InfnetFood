import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { WelcomeCard } from '../../components/WelcomeCard';
import { styles } from './styles';

export default function Login() {
  return (
    <>
      <View style={styles.container}>
        <WelcomeCard />
        <View>
          <TextInput
            placeholder='Informe seu nome de usuário'
          />
          <TextInput
            placeholder='Informe sua senha'
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}