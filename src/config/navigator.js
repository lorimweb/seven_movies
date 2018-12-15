import { createStackNavigator } from 'react-navigation';

import Home from '../components/home/home';
import movieDetail from '../components/movie/detail';

const BaseNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerMode: 'none',
        headerTransparent: true,
      },
    },
    movieDetail: {
      screen: movieDetail,
      navigationOptions: {
        headerMode: 'none',
        headerTransparent: true,
        headerTintColor: '#e60914',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default BaseNavigator;
