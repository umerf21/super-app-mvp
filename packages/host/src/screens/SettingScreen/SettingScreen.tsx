import React, { useState } from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import { ROOT_PAGE_URL } from '../../navigation/navigation.types';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigation()
  const currentLang = i18n.language;
  const LANGUAGE_KEY = "appLanguage";

  const changeLanguage = async (lang: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
      RNRestart.Restart();
    } catch (error) {
      console.log(error);
      
    }
    
   
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <Header showBack={true} title={ROOT_PAGE_URL.Settings} onBack={()=> nav.goBack()} />
    <View style={styles.container}>
      <Text style={styles.title}>{t('miniApp.settings')}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.language')}</Text>

        <TouchableOpacity
          style={[
            styles.langButton,
            currentLang === 'en' && styles.langButtonActive,
          ]}
          onPress={() => changeLanguage('en')}
        >
          <Text style={styles.langText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.langButton,
            currentLang === 'ar' && styles.langButtonActive,
          ]}
          onPress={() => changeLanguage('ar')}
        >
          <Text style={styles.langText}>العربية</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

