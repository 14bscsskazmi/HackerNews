import React, { FunctionComponent, useEffect } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// import { User, AuthState, UserState } from '../../global/types';

// Below are imported styles
import globalStyles from '../../../global/global-styles';
// import styles from './styles'
import { BASE_URL, SCREEN_WIDTH } from '../../../global/constants';
import styles from './styles';

const logo = require('../../assets/icons/authentication/logo.png');

const SplashScreenContainer: FunctionComponent = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LandingScreen');
    }, 3000); // The inner code will be executed after 3 seconds
  }, []);

  return (
    <View style={[globalStyles.center, globalStyles.flex_1]}>
      <View style={[styles.logo_view]}>
        <Text style={[globalStyles.h2, styles.logo_text]}>Hacker News</Text>
      </View>
      <Text style={[globalStyles.regular, styles.slogan_text]}>We Report to You.</Text>
    </View>
  );
};

export default SplashScreenContainer;
