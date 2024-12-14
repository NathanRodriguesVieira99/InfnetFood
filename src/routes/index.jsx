import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';


Stack = createStackNavigator();
Tab = createBottomTabNavigator();


function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
  
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name='BottomTabs'
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

  );
}