import { StyleSheet } from 'react-native';

export const createStyles = (currentTheme) => StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: currentTheme.background,
    flex: 1,
  },
  item: {
    color: currentTheme.text,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 15,
    textAlign: 'center',
    color: currentTheme.text,
    fontFamily: 'Montserrat_700Bold',
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.text,
    fontFamily: 'Montserrat_500Medium',
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
    color: currentTheme.text,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 5,
  },
  placeholder: {
    color: currentTheme.text,
  },
  buttonContainer: {
    marginTop: 30,
   
  },
  address: {
    color: currentTheme.text,
  },
  payment: {
    color: currentTheme.text,
  },
});
