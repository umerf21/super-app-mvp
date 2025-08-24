// src/screens/NotificationsScreen.tsx
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/Header";
import { ROOT_PAGE_URL } from "../../navigation/navigation.types";
import { colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Message",
    message: "You received a new message from John.",
    date: "2025-08-24",
    read: false,
  },
  {
    id: "2",
    title: "App Update",
    message: "Version 2.0 is now available for download.",
    date: "2025-08-23",
    read: true,
  },
  {
    id: "3",
    title: "Reminder",
    message: "Don’t forget your meeting at 3PM.",
    date: "2025-08-22",
    read: false,
  },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [refreshing, setRefreshing] = useState(false);
  const nav = useNavigation();

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // Simulate fetching new notifications
      setNotifications((prev) => [
        {
          id: Date.now().toString(),
          title: "New Offer",
          message: "Check out the latest deals in your area.",
          date: new Date().toISOString().split("T")[0],
          read: false,
        },
        ...prev,
      ]);
      setRefreshing(false);
    }, 1500);
  }, []);

  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: item.read ? "#f9f9f9" : "#e6f0ff" },
      ]}
      onPress={() => toggleRead(item.id)}
    >
      <View style={styles.row}>
        <Icon
          name={item.read ? "notifications-outline" : "notifications"}
          size={24}
          color={item.read ? "#666" : "#007bff"}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.background}}>
      <Header showBack={true} title={ROOT_PAGE_URL.Notification} onBack={()=> nav.goBack()} />
    {/* <View style={styles.container}> */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

