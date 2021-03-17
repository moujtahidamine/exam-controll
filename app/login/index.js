import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  LoginScreen,
} from './screens';

const Router = createStackNavigator(
  {
    
    LoginScreen,
    
  },
  {
    initialRouteName: 'LogonScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);