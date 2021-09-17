import { StyleSheet } from 'react-native';

import { COLORS, FONT_STYLES, SCREEN_WIDTH } from './constants';

const globalStyles = StyleSheet.create({
  flex_03: {
    flex: 0.3,
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_6: {
    flex: 6,
  },
  flex_direction_row: {
    flexDirection: 'row',
  },
  flex_direction_column: {
    flexDirection: 'column',
  },
  main_container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  regular_bold_family: {
    fontFamily: 'ProductSans-Regular',
  },
  bold_font_family: {
    fontFamily: 'Lato-Bold',
  },
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  font_500: {
    fontWeight: '500',
  },
  font_600: {
    fontWeight: '600',
  },
  font_700: {
    fontWeight: '700',
  },
  regular: {
    fontFamily: FONT_STYLES.font,
    fontSize: FONT_STYLES.font_size_16,
    lineHeight: FONT_STYLES.line_height_19,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  h2: {
    fontFamily: FONT_STYLES.font,
    fontSize: FONT_STYLES.font_size_30,
    lineHeight: FONT_STYLES.line_height_36,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  small: {
    fontFamily: FONT_STYLES.font,
    fontSize: FONT_STYLES.font_size_14,
    lineHeight: FONT_STYLES.line_height_17,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  // shadow: {
  //   padding: 15,
  //   backgroundColor: '#fff',
  //   shadowColor: COLORS.light_grey,
  //   width: 320,
  //   height: 170,
  //   borderRadius: 10,
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  //   shadowOffset: {
  //     height: 1,
  //     width: 1,
  //   },
  // },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justify_content_center: {
    justifyContent: 'center',
  },
  align_items_center: {
    alignItems: 'center',
  },
});

export default globalStyles;
