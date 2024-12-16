import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from '../../contexts/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { createStyles } from './styles';

export default function Configurations() {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);



  const { toggleTheme, theme } = useTheme()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Configurações
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Feather
          name={theme === 'dark' ? 'sun' : 'moon'}
          size={40}
          color={theme === 'dark' ? '#000' : '#000'}
        />
      </TouchableOpacity>
    </View>
  )
}
