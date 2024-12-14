import { Text, View, FlatList, Image } from "react-native";

const productsData = {
  Cigarros: [
    {
      id: '1',
      nome: 'Marlboro',
      price: 5.99,
      // imagem: require('')
    },
    {
      id: '2',
      nome: 'Lucky Strike',
      price: 2.00,
      // imagem: require('')
    },
    {
      id: '3',
      nome: '',
      price: 2.00,
      // imagem: require('')
    },
  ],
  Bebidas: [],
  Lanches: [],
  Mexicana: [],
  Japonesa: []
}


export default function Products({ route }) {
  const { category } = route.params
  const products = productsData[category] || []

  return (
    <View>
      <Text> Produtos da categoria {category}</Text>
      <FlatList data={products}
        renderItem={({ item }) => (
          <View>
            <Image />
            <Text>

            </Text>
            <Text>

            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}