import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.verticalPaddingLg,
    paddingHorizontal: theme.horizontalPaddingLg,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: theme.standardFontSize + 3,
    fontWeight: theme.boldFontWeight,
  },
});
