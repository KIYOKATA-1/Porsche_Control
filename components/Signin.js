import React, { useState, useRef } from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity,
  TextInput, Animated, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../assets/img/image';
import { LStyle } from '../styles/signin';
import axios from 'axios';

export default function Signin() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
    ]).start();
  }

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      handleShake();
      return;
    }
    try {
      const response = await axios.post('http://localhost:5012/signin', { username, password });
      if (response.data === "User authenticated successfully") {
        navigation.navigate('Main', { screen: 'Profile', params: { username: username } });
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.toString());
    }
  };

  return (
    <SafeAreaView style={LStyle.container}>
      <View>
        <Image source={IMAGES.LOGIN} style={LStyle.car}></Image>
      </View>
      <View style={LStyle.input}>
        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={'snow'}
            style={LStyle.username}
            value={username}
            onChangeText={setUsername}
          />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'snow'}
            secureTextEntry={true}
            style={LStyle.password}
            value={password}
            onChangeText={setPassword}
          />
        </Animated.View>
      </View>
      <View style={LStyle.btnContainer}>
        <TouchableOpacity style={LStyle.signUpBtn} onPress={() => navigation.navigate('Signup')}>
          <Text style={LStyle.signUpBtnText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={LStyle.loginBtn} onPress={handleLogin}>
          <Text style={LStyle.loginBtnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
