// services/auth.ts
import { authorize } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../../store';
import { loginSuccess, logout } from '../../store/slices/authSlice';
import { config } from './config';


export const login = async () => {
  try {
    const result = await authorize(config);
    // save tokens in async storage
    await AsyncStorage.setItem('accessToken', result.accessToken);
    await AsyncStorage.setItem('refreshToken', result.refreshToken ?? '');
    // update redux
    store.dispatch(
      loginSuccess({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken ?? '',
        idToken: result.idToken,
      })
    );
  } catch (e) {
    console.error('Login error', e);
  }
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem('accessToken');
  await AsyncStorage.removeItem('refreshToken');
  store.dispatch(logout());
};
