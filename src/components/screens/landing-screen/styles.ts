import { StyleSheet } from 'react-native';
import { COLORS, SCREEN_WIDTH } from '../../../global/constants';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  watch_live: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    opacity: 0.4,
  },
  latest_news: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    marginTop: 50,
  },
  watch_live_text: {
    color: COLORS.black,
  },
  top_stories_text: {
    color: COLORS.black,
    marginLeft: 12,
  },
  feature_in_progress: {
    marginTop: 8,
    textAlign: 'center',
    color: COLORS.black,
  },
});
export default styles;
