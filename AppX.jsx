import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, ThemeContext } from './srcx/ThemeContext'; 

import Homescreen from './srcx/Homescreen';
import SecondScreen from './srcx/SecondScreen';
import Profile from './srcx/Profile';
import ScrollviewScreen from './srcx/ScrollviewScreen';
import FlatlistScreen from './srcx/FlatlistScreen';
import Instagram from './srcx/Instagram';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Homescreen />
  );
}

function MyTabs() {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
        },
        tabBarActiveTintColor: theme === 'dark' ? '#fff' : '#000',
        tabBarInactiveTintColor: theme === 'dark' ? '#888' : '#666',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="ScrollviewScreen" component={ScrollviewScreen} />
      <Tab.Screen name="FlatlistScreen" component={FlatlistScreen} />
      <Tab.Screen name="Instagram" component={Instagram} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabssss" component={MyTabs} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
}

const AppX = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppX;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});