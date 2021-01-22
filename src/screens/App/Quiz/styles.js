import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.primary,
    paddingVertical: theme.verticalPaddingLg,
  },
});
