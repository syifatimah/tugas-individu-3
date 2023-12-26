import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/component/Home';
import Akun from './src/component/Akun';
import Produk from './src/component/Produk';
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'Produk') {
              iconName = focused ? 'time-sharp' : 'time-outline';
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            heigh: 60,
          },
        }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Produk' component={Produk} />
        <Tab.Screen name='Akun' component={Akun} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;