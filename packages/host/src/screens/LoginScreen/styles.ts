import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.subtitle,
    color: colors.textSecondary,
    marginBottom: 32,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems:'center'
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: typography.button,
    fontWeight: "600",
  },

  topSection: {
    flex: 0.7, 
    backgroundColor: colors.primary, 
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  logo: {
    width: 150,
    height: 150,
  },
});
