import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { createStyles } from './styles';


export const CategoriaCard = ({ nome, imagem, onPress }) => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={styles.containerCategoria}>
      <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
        <Image source={imagem} style={styles.img} />
        <Text style={styles.name}>
          {nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export const Categories = () => {
  const categorias = [
    { id: '1', nome: 'Cigarros', imagem: require('../../assets/categories/cigarros.webp') },
    { id: '2', nome: 'Bebidas', imagem: require('../../assets/categories/bebidas_alcoolicas.jpg') },
    { id: '3', nome: 'Lanches', imagem: require('../../assets/categories/lanches.webp') },
    { id: '4', nome: 'Doces', imagem: require('../../assets/categories/doces.jpg') },
    { id: '5', nome: 'Mexicana', imagem: require('../../assets/categories/mexicana.jpg') },
    { id: '6', nome: 'Japonesa', imagem: require('../../assets/categories/japonesa.jpg') },
  ];

  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  const navigation = useNavigation(); 


  const handlePress = (categoryName) => {
    navigation.navigate('Products', { category: categoryName });
  };

  return (
    <View style={styles.Odin}>
      <Text style={styles.title}>
        Categorias
      </Text>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <CategoriaCard
            nome={item.nome}
            imagem={item.imagem}
            onPress={() => handlePress(item.nome)} 
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
