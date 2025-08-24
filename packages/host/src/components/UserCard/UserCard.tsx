// components/Banner.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../theme';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';


const UserCard = () => {
  const {t} = useTranslation()
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{t('hello')}</Text>
        <Text style={styles.title}>{t('username')}</Text>
      </View>

      {/* <Image
        source={images.bannerArt} 
        style={styles.image}
        resizeMode="contain"
      /> */}
    </View>
  );
};

export default UserCard;

