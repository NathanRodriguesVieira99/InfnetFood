import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    top: 15,
  },
  title: {
    textAlign: 'center',
    top: 8,
    fontSize: 20,
    color: currentTheme.text,
    fontFamily: 'Montserrat_700Bold'
  },
  itemsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    height: 80
  },
  NameAndQuantity: {
    textAlign: 'center',
  },
  price: {
    textAlign: 'center'
  },
  total: {
    textAlign: 'center',
    top: 40,
    fontSize: 20,
    backgroundColor: currentTheme.background,
    width: 200,
    marginLeft: '25%',
    borderRadius: 50,
    fontFamily: 'Montserrat_700Bold',
    padding: 5,
  }
})