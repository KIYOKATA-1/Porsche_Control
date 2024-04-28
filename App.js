import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text, Image, Animated, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Preview from './components/Preview';
import IMAGES from './assets/img/image';
import Main from './components/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await Font.loadAsync({
          'coda-bold': require('./assets/Fonts/Coda-ExtraBold.ttf'),
          'coda-regular': require('./assets/Fonts/Coda-Regular.ttf'),
          'outfit-bold': require('./assets/Fonts/Outfit-Bold.ttf'),
          'outfit-regular': require('./assets/Fonts/Outfit-Regular.ttf'),
          'caveat-regular': require('./assets/Fonts/Caveat-Regular.ttf'),
          'caveat-bold': require('./assets/Fonts/Caveat-SemiBold.ttf')

        });
        
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setAppIsReady(true)); 
      } catch (e) {
        console.warn('Error loading fonts', e);
        Alert.alert('Error', 'Unable to load fonts, please restart the app.');
      } finally {
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fadeAnim]);

  if (!appIsReady) {
    return (
      <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: fadeAnim , backgroundColor: '#1E2026'}}>
        <Image style={{ position: 'relative', bottom: 150, width: 430, objectFit: 'contain'}} source={IMAGES.LOGO}/>
      </Animated.View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
      >
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
