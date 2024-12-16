import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  title: {
    textAlign: 'center',
    top: 25,
   fontFamily: 'Montserrat_700Bold',
   fontSize: 25,
  },
  containerPedido: {
    marginVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 25
  },
  cardContainer: {
    backgroundColor: currentTheme.cardBackground,
    width: '100%',
    borderRadius: 10,
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.text,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: currentTheme.text,
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    color: currentTheme.status,
    fontFamily: 'Montserrat_700Bold'
  },
});
