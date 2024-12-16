import { Text, View, FlatList, ScrollView } from 'react-native';
import { createStyles } from "./styles";
import { useTheme } from '../../contexts/ThemeContext'

export default function CartPage({ route }) {
  const { cart } = route.params;

  const calcularTotal = () => {
    return cart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  }

  const { currentTheme } = useTheme()
  const styles = createStyles(currentTheme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos no carrinho</Text>
      <View>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.itemsContainer}>
              <Text style={styles.NameAndQuantity}>
                {item.nome} - {item.quantity}x
              </Text>
              <Text style={styles.price}>R$: {item.total.toFixed(2)}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
    </View>
  );
}


