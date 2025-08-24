import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_PAGE_URL } from './navigation.types';

import { screenoptions } from './navigation.config';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import MiniAppLoader from './MiniAppLoader';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={screenoptions}>
    <Stack.Screen name={ROOT_PAGE_URL.Login} component={LoginScreen} />
  </Stack.Navigator>
);

const AppStack = () => {    
    
    return (
    <Stack.Navigator screenOptions={screenoptions}>
      <Stack.Screen name={ROOT_PAGE_URL.Home} component={HomeScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.Profile} component={ProfileScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.Settings} component={SettingScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.Notification} component={NotificationsScreen} />
      <Stack.Screen
        name={ROOT_PAGE_URL.MiniApp}
        component={MiniAppLoader}
        options={({ route }: any) => ({
            title: route.params?.id,
            headerShown: false,
            gestureEnabled: true,
            presentation: 'fullScreenModal',
          })}
      />
    </Stack.Navigator>
   
  )
}

const RootStack = () => {
  const token = useSelector((state: any) => state.auth.isAuthenticated);
  const isAuthenticated = !!token;
  return isAuthenticated ? <AppStack /> : <AuthStack />;
};


export default RootStack