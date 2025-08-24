import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  card: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: { flexDirection: "row", alignItems: "flex-start" },
  textContainer: { marginLeft: 10, flex: 1 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 2 },
  message: { fontSize: 14, color: "#555", marginBottom: 4 },
  date: { fontSize: 12, color: "#888" },
});
