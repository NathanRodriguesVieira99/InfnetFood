import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createStyles } from "./styles";
import { useTheme } from '../../contexts/ThemeContext';

export default function Checkout() {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderSummary, setOrderSummary] = useState({
    items: [
      { name: 'Hamburguer', price: 15.00 },
      { name: 'Batata Frita', price: 10.00 },
    ],
    total: 25.00,
  });

  const validateForm = () => {
    if (!address || !paymentMethod) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      Alert.alert('Pedido Confirmado', 'Seu pedido foi realizado com sucesso!');
    }
  };

  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revisar Pedido</Text>

      <View>
        <Text style={styles.orderSummaryTitle}>Resumo do Pedido</Text>
        {orderSummary.items.map((item, index) => (
          <Text style={styles.item} key={index}>{item.name} - R${item.price.toFixed(2)}</Text>
        ))}
        <Text style={styles.total}>Total: R${orderSummary.total.toFixed(2)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.address}>Endereço de Entrega *</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Digite seu endereço"
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.payment}>Forma de Pagamento *</Text>
        <TextInput
          value={paymentMethod}
          onChangeText={setPaymentMethod}
          placeholder="Digite o método de pagamento"
          style={styles.input}
          placeholderTextColor={styles.placeholder.color} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Finalizar Pedido" onPress={handleCheckout} />
      </View>
    </View>
  );
}
