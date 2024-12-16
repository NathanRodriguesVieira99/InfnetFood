import React from 'react';
import { View, Text } from 'react-native';
import { createStyles } from "./styles";
import { useTheme } from '../../contexts/ThemeContext'

export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params; 

  const { currentTheme } = useTheme()
  const styles = createStyles(currentTheme)



  return (
    <View style={styles.container}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>

      <Text style={styles.menuTitle}>Exemplo de Item do Cardápio:</Text>
      <Text style={styles.menu}>{restaurant.menu}</Text>
    </View>
  );
}


