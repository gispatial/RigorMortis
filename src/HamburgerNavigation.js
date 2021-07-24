import {
 createAppContainer,
 createDrawerNavigator,
} from 'react-navigation';
import BlueScreen from './BlueScreen';
import DefaultScreen from './DefaultScreen';

const HamburgerNavigation = createDrawerNavigator(
    {
        BlueScreen: BlueScreen,
        DefaultScreen: {
            screen: DefaultScreen,
        }
    },
    {
        initialRouteName: ‘DefaultScreen’,


    }
 );


export default createAppContainer(HamburgerNavigation);
You
