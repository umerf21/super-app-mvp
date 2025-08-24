// components/TopDownMenu.tsx
import React from "react";
import {  View,
  Text,
  TouchableOpacity,
  Modal,
  Image
} from "react-native";
import {styles} from './style'
// import { typography } from "../../theme";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuProps {
  visible: boolean;
  onClose: () => void;
  insideNestedStack?: boolean
}

const TopDownMenu: React.FC<MenuProps> = ({ visible, onClose, insideNestedStack }) => {

  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    onClose();
    
    if(insideNestedStack) 
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: screen }],
        }) 
      )
      //@ts-ignore
    else navigation.navigate(screen);
  };
  return (
    <Modal visible={visible} transparent animationType="fade">
       <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
        />
      <SafeAreaView style={styles.modalContainer}>


        {/* First Row: Logo + Close */}
        <View style={styles.topRow}>
          <View style={{ flex: 1 }} />
          {/* <Image
            source={require("../assets/logo.png")} // replace with your logo
            style={styles.logo}
            resizeMode="contain"
          /> */}
          <TouchableOpacity onPress={onClose} style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon name="close" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Second Row: Menu buttons */}
        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => handleNavigate("Home")}
          >
            <Icon name="home-outline" size={24} color="#333" />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => handleNavigate("Profile")}
          >
            <Icon name="person-outline" size={24} color="#333" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => handleNavigate("Settings")}
          >
            <Icon name="settings-outline" size={24} color="#333" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
    </Modal>
  );
};

export default TopDownMenu;
