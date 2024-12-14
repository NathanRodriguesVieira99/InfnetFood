import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const UserName = await AsyncStorage.getItem('@username');
        if (UserName !== null) {
          setUsername(UserName);
        } else {
          setUsername('Usuário não cadastrado');
        }
      } catch (error) {
        console.error('Erro ao buscar usuário', error);
      }
    };

    getUser(); 
  }, []);

  return (
    <View>
      <Text>Bem-vindo {username}</Text>
    </View>
  );
}
