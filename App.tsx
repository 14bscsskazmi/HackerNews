import React from 'react';
import type { ReactNode } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store/store';
import AppContainer from './src/navigators';

const App: () => ReactNode = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    </PersistGate>
  </Provider>
);
export default App;
