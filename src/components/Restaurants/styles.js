import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: currentTheme.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: currentTheme.text,
    top: 10
  },
  card: {
    padding: 15,
    backgroundColor: currentTheme.cardBackground,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.text,
  },
  address: {
    fontSize: 14,
    color: currentTheme.text,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
   
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
})