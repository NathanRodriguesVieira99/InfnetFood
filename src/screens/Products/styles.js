import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    textAlign: 'center'
  },
  productCard: {
    width: '30%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 45,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    textAlign: 'center',
    color: currentTheme.text,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  price: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
    color: currentTheme.textSecondary || '#333',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 5,
  }
})