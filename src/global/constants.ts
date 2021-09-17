import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = SCREEN_WIDTH <= 420 && SCREEN_HEIGHT <= 695;
export const MAX_CHILD_ACCOUNTS = 4;
export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  google_red: '#DB4A39',
  orange: '#ff6600',
  off_white: '#f6f6ef',
};
export const FONT_STYLES = {
  font: Platform.OS === 'ios' ? 'System' : 'Roboto',
  line_height_19: 19,
  line_height_17: 17,
  line_height_36: 36,
  font_size_14: 14,
  font_size_16: 16,
  font_size_30: 30,
  font_weight_400: '400',
  font_weight_500: '500',
  font_weight_700: '700',
};
