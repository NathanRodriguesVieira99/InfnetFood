import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "../../contexts/ThemeContext";
import { productsData } from "../../data/products";

export default function Products({ route }) {
  const { category } = route.params
  const products = productsData[category] || []

  const { currentTheme } = useTheme()
  const styles = createStyles(currentTheme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Produtos da categoria {category}</Text>
      <FlatList data={products}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.card}>
              <TouchableOpacity>
                <Image
                  source={item.imagem}
                  style={{
                    width: 90,
                    height: 90
                  }}
                />
                <Text style={styles.name}>
                  {item.nome}
                </Text>
                <Text style={styles.price}>
                  R$: {item.price}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 10 }}
        keyExtractor={(item, index) => index.toString()}

      />
    </View>
  )
}