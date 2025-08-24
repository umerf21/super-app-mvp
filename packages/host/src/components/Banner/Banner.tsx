// components/Banner.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { images } from '../../theme';
import { useTranslation } from 'react-i18next';


const Banner = () => {
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      

      <Image
        source={images.bannerArt} 
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        {/* <Text style={styles.subtitle}>{t('lorem.ipsum')}</Text> */}
        <Text style={styles.title}>{t('home.superapp')}</Text>
      </View>
    </View>
  );
};

export default Banner;

