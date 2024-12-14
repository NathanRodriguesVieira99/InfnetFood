import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import Configurations from '../screens/Configurations';

import { useTheme } from '../contexts/ThemeContext';

Stack = createStackNavigator();
Tab = createBottomTabNavigator();


function BottomTabs() {
  const { currentTheme } = useTheme();



  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: currentTheme.tabBackground },
      // tabBarInactiveTintColor: { color: '#00BFFF' },
      // tabBarActiveTintColor: { color: '#00CED1' },
      tabBarLabelStyle: { fontSize: 11, fontFamily: 'Montserrat_700Bold' }
    }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Feather name='home' color={focused ? '#cacaca' : '#000000'} size={size} />
        ), title: ''
      }} />
      <Tab.Screen name='Perfil' component={Profile} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Feather name='user' color={focused ? '#cacaca' : '#000000'} size={size} />
        ), title: ''
      }} />
      <Tab.Screen name='Configuracoes' component={Configurations} options={{
        tabBarIcon: ({ color, focused, size }) => (
          <Feather name='settings' color={focused ? '#cacaca' : '#000000'} size={size} />
        ), title: ''
      }} />
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
      <Stack.Screen name='Products' component={Products} />
    </Stack.Navigator>

  );
}