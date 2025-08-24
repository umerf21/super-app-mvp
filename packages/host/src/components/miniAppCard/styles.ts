import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        height: 110,
        width: 100,
        backgroundColor: colors.background,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:1,
        borderColor: '#e3e3e3ff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },

       title: {
          textAlign: "center",
          marginTop:12,
          color: colors.textPrimary,
          fontWeight: 'bold',
        },

        circle:{
        width:50, height: 50, 
        borderRadius:50,
        alignItems:'center', justifyContent:'center'
        }
})