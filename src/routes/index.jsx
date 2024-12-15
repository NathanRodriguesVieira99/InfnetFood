import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import Configurations from '../screens/Configurations';
import Orders from '../screens/Orders';
import Checkout from '../screens/Checkout'

import { useTheme } from '../contexts/ThemeContext';

Stack = createStackNavigator();
Tab = createBottomTabNavigator();



const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Products" component={Products}
        options={{
          headerShown: true, title: '',
        }} />
    </Stack.Navigator>
  );
};



function BottomTabs() {
  const { currentTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: currentTheme.tabBackground,
          borderTopWidth: 0,
          marginTop: 0,
        },
        tabBarLabelStyle: { fontSize: 11, fontFamily: 'Montserrat_700Bold' },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Feather name='home' color={focused ? '#cacaca' : '#000000'} size={size} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name='Pedidos'
        component={Orders}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather name='shopping-bag' color={focused ? '#cacaca' : '#000000'} size={size} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name='Checkout'
        component={Checkout}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather name='check' color={focused ? '#cacaca' : '#000000'} size={size} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={Profile}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Feather name='user' color={focused ? '#cacaca' : '#000000'} size={size} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name='Configuracoes'
        component={Configurations}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather name='settings' color={focused ? '#cacaca' : '#000000'} size={size} />
          ),
          title: '',
        }}
      />
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
      <Stack.Screen name='Products' component={Products} options={{
        headerShown: true,
        title: ''
      }} />
    </Stack.Navigator>

  );
}