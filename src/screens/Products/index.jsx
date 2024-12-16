import { useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "../../contexts/ThemeContext";
import { productsData } from "../../data/products";
import { Feather } from '@expo/vector-icons';


export default function Products({ route, navigation }) {
  const { category } = route.params
  const products = productsData[category] || []

  const { currentTheme } = useTheme()
  const styles = createStyles(currentTheme)

  // logica do carrinho
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (index !== -1) {
      const updateCart = [...cart];
      updateCart[index].quantity += 1;
      updateCart[index].total = updateCart[index].quantity * updateCart[index].price;
      setCart(updateCart);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
        total: item.price,
      };
      setCart((prevCart) => [...prevCart, newItem])
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }
  // logica do carrinho

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('Cart', { cart })}>
        <Text style={styles.cartIcon}>
          <Feather name="shopping-cart" size={30} />
          {getTotalItems() > 0 && (
            <View style={styles.numberCart}>
              <Text style={styles.numberCartIcon}>
                {getTotalItems()}
              </Text>
            </View>
          )}
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}> Produtos da categoria {category}</Text>
      <FlatList data={products}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.card}>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Image
                  source={item.imagem}
                  style={{
                    width: 100,
                    height: 190
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