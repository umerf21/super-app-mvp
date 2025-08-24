import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header/Header';
import { ROOT_PAGE_URL } from '../../navigation/navigation.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


const ProfileScreen = () => {
  const auth = useSelector((state:any) => state?.auth)
  const nav = useNavigation()
  const {t} = useTranslation()

  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.background}}>
      <Header showBack={true} title={ROOT_PAGE_URL.Profile} onBack={()=> nav.goBack()} />
    <View style={styles.container}>
      <Text style={styles.title}>User Name</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>{t('profile.accessToken')}</Text>
        <Text numberOfLines={1} style={styles.value}>{auth.accessToken}</Text>

        <Text style={styles.label}>{t('profile.idToken')}</Text>
        <Text numberOfLines={1} style={styles.value}>{auth.idToken}</Text>
      </View>

    
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
