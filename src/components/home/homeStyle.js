import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
  container: { backgroundColor: '#333', paddingTop: 0 },
  latest: { marginTop: 0 },
  latest_img: {
    flex: 1,
    height: 200,
  },
  latestTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    bottom: 10,
    margin: 5,
  },
  categoryTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 0,
    padding: 5,
  },
  containerListMovies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  listMovies: {
    backgroundColor: '#ccc',
    width: '32%',
    marginBottom: 5,
  },
  listMoviesImg: {
    flex: 1,
    height: 180,
  },
});

export default homeStyle;
