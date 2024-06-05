import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faCloudSun, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import Climate from './Climate';
import Map from './Map';
import Home from './Home';
import Profile from './Profile';
import { ThemeProvider, useTheme } from './ThemeProvider';

const Tab = createBottomTabNavigator();

function TabBarIcon({ route, focused }) {
  const { isLightTheme } = useTheme();
  const iconName = {
    Home: faCar,
    Climate: faCloudSun,
    Map: faCompass,
    Profile: faUser,
  }[route.name];
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: focused ? 10 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [focused]);

  const backgroundColor = focused ? (isLightTheme ? '#CDBDFA' : '#63519F') : 'transparent';
  const iconColor = focused ? (isLightTheme ? '#63519F' : '#CDBDFA') : '#CDBDFA';
  const borderColor = focused ? (isLightTheme ? '#63519F' : '#CDBDFA') : '#CDBDFA';

  return (
    <Animated.View style={{
      width: 65,
      height: 35,
      borderRadius: 25,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: isLightTheme ? 'white' : 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: animatedValue,
      shadowOpacity: 1,
      elevation: animatedValue,
      borderWidth: 2,
      borderColor,
      position: 'relative',
      bottom: 25,
    }}>
      <FontAwesomeIcon icon={iconName} size={20} color={iconColor} />
    </Animated.View>
  );
}

export default function Main() {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={route} focused={focused} />
          ),
          tabBarShowLabel: false,
          tabBarStyle: [{
            backgroundColor: 'transparent',
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            display: 'flex',
          }, null],
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'snow',
        })}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Climate" component={Climate} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </ThemeProvider>
  );
}
