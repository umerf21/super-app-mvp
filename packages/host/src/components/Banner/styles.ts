import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 16,
    backgroundColor: '#DDEBF7',
    flexDirection: 'row',
    alignItems: 'center',
 
  },
  textContainer: {
    paddingLeft: 16,
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  image: {
    width: '60%',
    height: 120,
  },
});
