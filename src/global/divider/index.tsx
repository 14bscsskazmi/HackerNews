import React, { FunctionComponent, useEffect, useState } from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants';
import { SCREEN_WIDTH } from '../../global/constants';

type Props = {
  styles?: any,
}
const DividerContainer: FunctionComponent<Props> = (props) => {
  return (
    <View style={{height: 1, width: SCREEN_WIDTH, borderWidth: 1, borderCOLOR: COLORS.black, ...props.styles}}>

    </View>
  );
};
export default DividerContainer;