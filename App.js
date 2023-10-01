import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigation } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ISSlocation from './screens/ISSlocation';
import Meteors from './screens/Meteors';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>  
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ISSLocation" component={ISSlocation} />
        <Stack.Screen name="Meteors" component={Meteors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;