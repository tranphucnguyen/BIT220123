// App.js (hoặc index.js)

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonColorChange from '@/components/ButtonColorChange';

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonColorChange />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default App;
