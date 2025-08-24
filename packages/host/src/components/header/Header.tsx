// components/Header.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // or react-native-vector-icons
import TopDownMenu from "./TopDownMenu";
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from "./style";
import { colors } from "../../theme";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  insideNestedStack?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showBack = false, onBack, insideNestedStack= false }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {showBack && <TouchableOpacity onPress={onBack}>
         <Icon name={insideNestedStack ? "close" : "arrow-back"} size={24} color="black" />
      </TouchableOpacity>
      }

      <Text style={{ fontSize:16, fontWeight:500, color: "black", textAlign: "center", flex: 1, marginLeft: showBack ? 0 : 30 }}>
        {title}
      </Text>

      <TouchableOpacity onPress={() => setMenuVisible(true)}>
       <Icon name="menu-outline" size={24} color={colors.primary} />
      </TouchableOpacity>

      <TopDownMenu visible={menuVisible} insideNestedStack={insideNestedStack} onClose={() => {setMenuVisible(false)}} />
    </View>
  );
};

export default Header;
