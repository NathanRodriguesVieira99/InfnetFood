import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: currentTheme.background
  }
})