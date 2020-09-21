import * as React from 'react';
import {View} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AppDrawerNavigator from './components/MyDrawer'

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

const AppNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  MyDrawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppNavigator)
