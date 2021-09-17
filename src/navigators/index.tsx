import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/screens/splash-screen';
import LandingScreenComponent from '../components/screens/landing-screen';
import LatestNewsContainer from '../components/screens/latest-news';

import 'react-native-gesture-handler';

const AppStack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Authentication" headerMode="none">
        <AppStack.Screen
          name="Authentication"
          component={SplashScreen}
        />
        <AppStack.Screen name="LandingScreen" component={LandingScreenComponent} />
        <AppStack.Screen name="LatestNews" component={LatestNewsContainer} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
