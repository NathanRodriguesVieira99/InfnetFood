import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { createStyles } from "./styles";

export const PedidoCard = ({ nome, status, text }) => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  const getStatusColor = (status) => {
    if (status === 'a caminho') return currentTheme.statusOnWay;
    if (status === 'entregue') return currentTheme.statusOk;
    if (status === 'cancelado') return currentTheme.statusCancel;
    return currentTheme.text; 
  }

  return (
    <View style={styles.containerPedido}>
      <TouchableOpacity style={styles.cardContainer}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.status, { color: getStatusColor(status) }]}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};

const pedidos = [
  { id: '1', nome: '20x maços de cigarro', text: 'Bar do Tião', status: 'a caminho' },
  { id: '2', nome: '999x vodkas', text: 'Adega do Borracha', status: 'entregue' },
  { id: '3', nome: '1x pizza', text: 'Pizzaria Santa Maria', status: 'cancelado' },
];

export default function Orders() {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: currentTheme.background }}>
      <Text style={styles.title}>Seus pedidos</Text>
      <FlatList
        data={pedidos}
        renderItem={({ item }) => (
          <PedidoCard nome={item.nome} text={item.text} status={item.status} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
