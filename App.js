import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import DrawerNavigation1 from './Navigations/DrawerNavigation1';
import UsoProvider from './Context/UsoContext';
import BottomTabNavigation1 from './Navigations/BottomTabNavigation1';

export default function App() {
  return (
    <UsoProvider>
    <NavigationContainer>
      <DrawerNavigation1/>
    </NavigationContainer>
    </UsoProvider>
  );
}

