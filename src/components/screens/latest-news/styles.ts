import { StyleSheet } from 'react-native';
import { COLORS, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '../../../global/constants';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 20,
    justifyContent: 'flex-start',
  },
  latest_story_title_card: {
    width: SCREEN_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_arrow: {
    width: 6.6,
    height: 11.7,
    marginLeft: 8,
  },
  title_text: {
    fontWeight: 'normal',
    width: SCREEN_WIDTH * 0.85,
  }
});
export default styles;
