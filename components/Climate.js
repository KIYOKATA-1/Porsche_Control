import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CStyle } from '../styles/climate';
import Slider from '@react-native-community/slider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faA, faSnowflake, faFan, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeProvider';

export default function Climate() {
  const navigation = useNavigation();
  const [temperature, setTemperature] = useState(16);
  const [activeButtons, setActiveButtons] = useState([]);

  const {isLightTheme, toggleTheme} = useTheme();

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
    return activeButtons.includes(buttonId) ? (isLightTheme ? CStyle.btnCLight : CStyle.btnC) : (isLightTheme ? CStyle.btnActiveLight : CStyle.btnActive)
  };

  const getIconStyle = (buttonId) => {
    return activeButtons.includes(buttonId) ? (isLightTheme ? CStyle.iconLight : CStyle.icon) : (isLightTheme ? CStyle.iconActiveLight : CStyle.iconActive)
  };


  // Styles
  const containerStyle = isLightTheme ? CStyle.containerLight : CStyle.container;
  const nameStyle  = isLightTheme ? CStyle.nameLight : CStyle.name;
  const temperatureStyle = isLightTheme ? CStyle.temperatureLight : CStyle.temperature;
  const btnTextStyke = isLightTheme ? CStyle.buttonTextLight : CStyle.buttonText;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={nameStyle}>CLIMATE</Text>
      <Text style={temperatureStyle}>{temperature}°C</Text>
      <Slider
        style={CStyle.slider}
        minimumValue={10} 
        maximumValue={30}
        onValueChange={handleSliderChange}
        minimumTrackTintColor={isLightTheme ? "#63519F" : "#CDBDFA"}
        maximumTrackTintColor={isLightTheme ? "#CDBDFA" : "#63519F"}
        thumbTintColor={isLightTheme ? "#63519F" : "#CDBDFA"}
      />
      <View style={CStyle.buttonGroup}>
        <View style={CStyle.buttonContainer}>
          <Text style={btnTextStyke}>AUTO</Text>
          <TouchableOpacity style={getButtonStyle('A')} onPress={() => handlePress('A')}>
            <FontAwesomeIcon icon={faA} size={25} style={getIconStyle('A')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={btnTextStyke}>cool</Text>
          <TouchableOpacity style={getButtonStyle('Snowflake')} onPress={() => handlePress('Snowflake')}>
            <FontAwesomeIcon icon={faSnowflake} size={25} style={getIconStyle('Snowflake')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={btnTextStyke}>Fan</Text>
          <TouchableOpacity style={getButtonStyle('Fan')} onPress={() => handlePress('Fan')}>
            <FontAwesomeIcon icon={faFan} size={25} style={getIconStyle('Fan')}/>
          </TouchableOpacity>
        </View>

        <View style={CStyle.buttonContainer}>
          <Text style={btnTextStyke}>heat</Text>
          <TouchableOpacity style={getButtonStyle('Sun')} onPress={() => handlePress('Sun')}>
            <FontAwesomeIcon icon={faSun} size={25} style={getIconStyle('Sun')}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
