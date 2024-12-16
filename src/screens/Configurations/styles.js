import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: currentTheme.background,
  },
  title: {
    textAlign: 'center',
    marginTop: 35,
    fontFamily: 'Montserrat_700Bold',
    color: currentTheme.text,
    fontSize: 25
  }
})