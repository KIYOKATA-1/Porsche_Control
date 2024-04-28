import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faCloudSun, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import Climate from './Climate';
import Map from './Map';
import Home from './Home';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function TabBarIcon({ route, focused }) {
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
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, [focused]); 

  const backgroundColor = focused ? 'snow' : 'transparent';
  const iconColor = focused ? 'black' : 'snow';

  return (
    <Animated.View style={{
      width: 65,
      height: 35,
      borderRadius: 25,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'snow',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: animatedValue, 
      shadowOpacity: 1,
      elevation: animatedValue, 
      borderWidth: 1,
      borderColor: 'white',
      position: 'relative',
      bottom: 25,
    }}>
      <FontAwesomeIcon icon={iconName} size={20} color={iconColor} />
    </Animated.View>
  );
}

export default function Main() {
  return (
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
      <Tab.Screen name="Profile" component={Profile}  />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Climate" component={Climate} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}
