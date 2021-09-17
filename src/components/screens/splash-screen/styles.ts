import { StyleSheet } from 'react-native';
import { COLORS, SCREEN_WIDTH } from '../../../global/constants';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: SCREEN_WIDTH * 0.7,
  },
  logo_text: {
    color: COLORS.black,
  },
  logo_view: {
    backgroundColor: COLORS.orange,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  slogan_text: {
    color: COLORS.black,
    fontSize: 20,
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'center',
  },
});
export default styles;
