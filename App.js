import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
