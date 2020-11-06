import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#00dfc0',
    width: '60%',
    height: 55,
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10
  },
  input: {
    width: '80%',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10
  },
  caloriesTitle: {
    color: 'white',
    fontSize: 22,
    bottom: 10
  },
  caloriesDesc: {
    color: 'white',
    fontSize: 18,
    top: 10
  },
  macroTitle: {
    color: '#222',
    fontSize: 22
    // bottom: 10
  },
  macrosDesc: {
    color: 'white',
    fontSize: 18,
    top: 5
  },
  progressBar: {
    backgroundColor: '#222',
    width: 200,
    height: 200,
    borderRadius: 100
  },
  searchBar: {
    backgroundColor: 'rgba(210,207,206,.3)',
    borderRadius: 10
  },
  foodCard: {
    borderRadius: 10,
    margin: 6,
    backgroundColor: 'transparent',
    borderRightWidth: 4,
    borderBottomWidth: 5,
    borderColor: '#00dfc0'
  },
  foodCardImage: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 10
  },
  foodCardContent: {
    backgroundColor: '#222'
  },
  foodCardActions: {
    backgroundColor: '#222',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  }
});
