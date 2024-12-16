import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { createStyles } from "./styles";
import { useTheme } from '../../contexts/ThemeContext'
import map from '../../assets/mapa/map_mock.png'

const restaurants = [
  {
    id: '1',
    name: 'KFC',
    address: 'Rua do Ouvidor, Centro, Rio de Janeiro',
    menu: 'Frango no balde',
  },
  {
    id: '2',
    name: "Mc Donald's",
    address: 'Rua Gonçalves Dias, Centro, Rio de Janeiro',
    menu: 'Big Mac',
  },
  {
    id: '3',
    name: 'Trapa',
    address: 'Rua da Carioca, Centro, Rio de Janeiro',
    menu: 'Coxinha',
  },
  {
    id: '4',
    name: 'Juarez Cocina Mexicana',
    address: 'Rua Sao José, Centro, Rio de Janeiro',
    menu: 'Tacos & Tortillas',
  },
  {
    id: '5',
    name: 'Kebab Shop',
    address: 'Rua São José, Centro, Rio de Janeiro',
    menu: 'Kebab',
  },
];

export default function Restaurants({ navigation }) {
  const { currentTheme } = useTheme()
  const styles = createStyles(currentTheme)



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes no Centro do Rio</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.imageContainer}>
        <Image
          source={map}
          style={styles.image}
          resizeMode="cover" 
        />
      </View>
    </View>
  );
}



