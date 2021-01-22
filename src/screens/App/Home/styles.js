import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';
export const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.white,
    flex: 1,
    paddingHorizontal: theme.horizontalPaddingMd,
  },
  text: {
    color: theme.black,
    fontSize: theme.largeFontSize,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
  },
});
