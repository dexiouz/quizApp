import {StyleSheet} from 'react-native';
import theme from '../../../../config/theme';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.white,
    flex: 1,
  },
  question: {
    backgroundColor: theme.primary,
    flex: 4,
    width: '100%',
    paddingHorizontal: theme.horizontalPaddingMd,
  },
  text: {
    color: theme.white,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  answerBtns: {
    padding: 20,
    paddingBottom: 30,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.white,
    width: '90%',
    position: 'relative',
    top: -50,
    borderRadius: 4,
  },
});
