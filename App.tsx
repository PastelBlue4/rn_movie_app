import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // const getData = async () => {
  //       //   setTimeout();
  //       };
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}
