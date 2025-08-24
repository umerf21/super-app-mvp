import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNavigationContainerRef } from '@react-navigation/native';

export const screenoptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};

export const navigation = createNavigationContainerRef();
