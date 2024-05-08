import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CStyle } from '../styles/climate';
import Slider from '@react-native-community/slider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faA, faSnowflake, faFan, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Climate() {
  const navigation = useNavigation();
  
  const [temperature, setTemperature] = useState(16);
  const [activeButtons, setActiveButtons] = useState([]);

  const handleSliderChange = (value) => {
    setTemperature(Math.round(value));
  };

  const handlePress = (buttonId) => {
    setActiveButtons(prev => {
      if (prev.includes(buttonId)) {
        return prev.filter(id => id !== buttonId);
      } else {
        return [...prev, buttonId];
      }
    });
  };

  const getButtonStyle = (buttonId) => {
    return activeButtons.includes(buttonId) ? CStyle.btnActive : CStyle.btnC;
  };

  const getIconStyle = (buttonId) => {
    return activeButtons.includes(buttonId) ? CStyle.iconActive : CStyle.icon;
  };

  return (
    <SafeAreaView style={CStyle.container}>
      <Text style={CStyle.name}>CLIMATE</Text>
      <Text style={CStyle.temperature}>{temperature}°C</Text>
      <Slider
        style={CStyle.slider}
        minimumValue={10} 
        maximumValue={30}
        onValueChange={handleSliderChange}
        minimumTrackTintColor="#CFFF7F"
        maximumTrackTintColor="#FFFFFF"
        thumbTintColor="#FFFFFF"
      />
      <View style={CStyle.buttonGroup}>
        <View style={CStyle.buttonContainer}>
          <Text style={CStyle.buttonText}>AUTO</Text>
          <TouchableOpacity style={getButtonStyle('A')} onPress={() => handlePress('A')}>
            <FontAwesomeIcon icon={faA} size={25} style={getIconStyle('A')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={CStyle.buttonText}>cool</Text>
          <TouchableOpacity style={getButtonStyle('Snowflake')} onPress={() => handlePress('Snowflake')}>
            <FontAwesomeIcon icon={faSnowflake} size={25} style={getIconStyle('Snowflake')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={CStyle.buttonText}>Fan</Text>
          <TouchableOpacity style={getButtonStyle('Fan')} onPress={() => handlePress('Fan')}>
            <FontAwesomeIcon icon={faFan} size={25} style={getIconStyle('Fan')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={CStyle.buttonText}>heat</Text>
          <TouchableOpacity style={getButtonStyle('Sun')} onPress={() => handlePress('Sun')}>
            <FontAwesomeIcon icon={faSun} size={25} style={getIconStyle('Sun')}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
