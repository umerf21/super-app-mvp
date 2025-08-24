// components/MiniAppCard.tsx
import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { colors, typography } from "../theme";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

interface MiniAppCardProps {
  item:{ 
    title: string;
    icon?: any;
    color?: string;
  };
  onPress: () => void;
}

const MiniAppCard: React.FC<MiniAppCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      {item?.icon &&
        <View 
        style={[styles.circle,{backgroundColor:`${item.color}30`}]}>
            <Icon name={item?.icon} size={28} color={item.color} />
        </View>
      }
      <Text style={styles.title}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

export default MiniAppCard;
