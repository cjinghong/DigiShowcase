import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginScreen from '../screens/LoginScreen';

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Contact: ContactScreen,
});
const Root = createStackNavigator(
  {
    Home: AppDrawerNavigator,
    /** MODAL SCREENS GO HERE * */
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    mode: 'modal', // Remember to set the root navigator to display modally.
    headerMode: 'none', // This ensures we don't get two top bars.
  },
);

const AppContainer = createAppContainer(Root);

export default AppContainer;
