import { StyleSheet } from 'react-native';

const movieStyle = StyleSheet.create({
  container: { backgroundColor: '#333' },
  cover: {
    flex: 1,
    height: 200,
  },
  original_title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    margin: 5,
    marginTop: 10,
  },
  release_date: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
    margin: 5,
  },
  overview: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 5,
  },
});

export default movieStyle;
