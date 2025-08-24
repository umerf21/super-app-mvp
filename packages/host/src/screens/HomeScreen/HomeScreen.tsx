import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import { MINI_APPS } from '../../miniapp'
import { useNavigation } from '@react-navigation/native'
import MiniAppCard from '../../components/miniAppCard/MiniAppCard'
import Banner from '../../components/Banner/Banner'
import { images } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ROOT_PAGE_URL } from '../../navigation/navigation.types'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {t} = useTranslation()

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('pages.dashboard')} />

      <View style={styles.logoRow}>
        <Image source={images.logoColor} style={styles.logoImage} resizeMode="contain" />
        <Text style={styles.logoText}>{t('home.superapp')}</Text>
      </View>

      {/* <UserCard /> */}
      <Banner />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t('home.miniApps')}</Text>
        <FlatList
          data={MINI_APPS}
          horizontal
          contentContainerStyle={styles.flatListContent}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MiniAppCard
              onPress={() => navigation.navigate(ROOT_PAGE_URL.MiniApp, { id: item.id })}
              item={item}
            />
          )}
        />
      </View>
      {/* Floating Action Button */}
      <TouchableOpacity style={[styles.fab, { bottom: 20 + insets.bottom }]} onPress={()=>navigation.navigate(ROOT_PAGE_URL.Notification)}>
        <Icon name="notifications-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen