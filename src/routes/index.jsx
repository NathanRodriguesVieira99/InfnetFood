import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';


Tab = createBottomTabNavigator();


export default function Routes() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{

      }}>
        <Tab.Screen name='Home' component={Home} options={{

        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}