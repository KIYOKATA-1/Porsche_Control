import { Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, AppRegistry} from 'react-native';
import React, {useState, useEffect} from 'react';
import { PStyle } from '../styles/preview';
import IMAGES from '../assets/img/image';
import { useNavigation } from '@react-navigation/native';

export default function Preview() {
  const navigation = useNavigation();
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[PStyle.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  return (
    <SafeAreaView style={PStyle.container}>
        <MyStatusBar backgroundColor="#CDBDFA" barStyle="light-content" />
      <View>
        <Image style={PStyle.logo} source={IMAGES.LOGO}></Image>
        <Text style={PStyle.text}>THERE IS NO SUBSTITUTE</Text>
        <TouchableOpacity style={PStyle.button} onPress={() => navigation.navigate('Signin')}>
          <Text style={{fontSize: 24, color: 'white', fontFamily:'outfit-bold'}}>START</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

