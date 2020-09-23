import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
  logo: {
    height: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    alignSelf: 'center',
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  deviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3c3e78',
    marginTop: 10,
  },
  infoLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginRight: 10,
  },
  infoEdit: {
    height: 25,
    width: 185,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    padding: 0,
    margin: 0,
    borderWidth: 0,
    color: '#fff',
  },
});

export default styles
