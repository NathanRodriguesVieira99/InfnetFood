import { StyleSheet } from "react-native";

export const createStyles = (currentTheme) => StyleSheet.create({
  Odin: {
    backgroundColor: currentTheme.background,
    flex: 1,
  },
  containerCategoria: {
    marginTop: 35,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '80%',
    margin: -10,
    position: 'relative',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
   
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 999
  },
  title: {
    marginLeft: 10,
    marginTop: 35,
    color: currentTheme.text,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 30,
  },
})