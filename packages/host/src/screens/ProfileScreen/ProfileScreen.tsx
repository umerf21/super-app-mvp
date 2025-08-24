import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header/Header';
import { ROOT_PAGE_URL } from '../../navigation/navigation.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';


const ProfileScreen = () => {
 
  const nav = useNavigation()

  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.background}}>
      <Header showBack={true} title={ROOT_PAGE_URL.Profile} onBack={()=> nav.goBack()} />
    <View style={styles.container}>
      <Text style={styles.title}>User Name</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Access Token:</Text>
        <Text numberOfLines={1} style={styles.value}>{ 'N/A'}</Text>

        <Text style={styles.label}>ID Token:</Text>
        <Text numberOfLines={1} style={styles.value}>{'N/A'}</Text>
      </View>

    
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
