import React from 'react';import {
 createAppContainer,
 createDrawerNavigator,
 createStackNavigator,
} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';
import BlueScreen from './BlueScreen';
import DefaultScreen from './DefaultScreen';
import BottomTabs from './BottomTabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
