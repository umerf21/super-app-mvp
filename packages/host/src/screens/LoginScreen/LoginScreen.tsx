import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import {styles} from './styles';
import { login } from '../../services/auth/auth';
import {images} from '../../theme/images';

const LoginScreen = () => {
  const { t } = useTranslation();

  const handleLogin = () => {
    login()
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={images.logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{t('login.title')}</Text>
        <Text style={styles.subtitle}>{t('login.subtitle')}</Text>


        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('login.button')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
