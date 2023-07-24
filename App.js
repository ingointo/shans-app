import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomDrawer from './src/routes/Bottomdrawer';
import Home from './src/components/screens/Home';



export default function App() {
  return (
    <NavigationContainer>
      <BottomDrawer/>
    </NavigationContainer>
  );
}
