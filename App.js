import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootStackScreen from './src/stack/RootStackScreen';

export default function App() {

  let [fontsLoaded] = useFonts({
    nunitoRegular: require('./src/assets/fonts/Nunito-Regular.ttf'),
    nunitoSemi: require('./src/assets/fonts/Nunito-SemiBold.ttf'),
    nunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
     <RootStackScreen/>
  )
  }
  
}
