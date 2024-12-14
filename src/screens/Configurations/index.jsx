import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from '../../contexts/ThemeContext';
import { Feather } from '@expo/vector-icons'

export default function Configurations() {
  const { toggleTheme, theme } = useTheme()
  return (
    <View>
      <Text>
        TESTE TEMA DARK/LIGHT
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
