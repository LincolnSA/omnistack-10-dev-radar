import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/Main';
import ProfileScreen from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: MainScreen,
            navigationOptions: {
                title: "DevRadar"
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: "Perfil no Github"
            }
        }
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7d40e7'
            }
        }
    })
);

export default Routes;