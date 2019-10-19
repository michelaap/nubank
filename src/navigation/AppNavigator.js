import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../screens/Main';

const AppNavigator = createStackNavigator({
  Main
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);