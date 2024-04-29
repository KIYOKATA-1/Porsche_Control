import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import { PrStyle } from '../styles/profile';
import {useRoute} from '@react-navigation/native';
import PROFILE from '../assets/img/PROFILE';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRoad} from '@fortawesome/free-solid-svg-icons';
const { width } = Dimensions.get('window');

export default function Profile() {
  const route = useRoute();
  const username = route.params?.username;  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(45);

  const handleScroll = event => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
    }
  };

  const getBorderStyle = (level) => {
    const maxFuel = 77;
    const percentage = (level / maxFuel);
    let color, shadow;
  
    if (percentage < 0.3) {
      color = 'red';
      shadow = {
        shadowColor: 'red',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
      };
    } else if (percentage < 0.6) {
      color = '#CCFF00';
      shadow = {
        shadowColor: '#CCFF00',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
      };
    } else {
      color = '#00FF29';
      shadow = {
        shadowColor: '#00FF29',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
      };
    }
  
    return { borderColor: color, ...shadow };
  };
  
  const borderStyle = getBorderStyle(fuelLevel);
  

  return (
    <SafeAreaView style={PrStyle.container}>
      <View style={PrStyle.textC}> 
          <Text style={PrStyle.welcome}>
            WELCOME
          </Text>
          <Text style={PrStyle.username}>
            {username || 'Guest'} 
          </Text>
      </View>

    <View style={PrStyle.carC}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={20}
                style={{ width: width }}
            >
                {Object.values(PROFILE).map((source, index) => (
                    <Image
                        key={index}
                        source={source}
                        style={[PrStyle.car, { width: width,resizeMode: 'cover' }]}
                    />
                ))}
            </ScrollView>
    </View>
    <View style={PrStyle.dataCon}>

      <View style={PrStyle.millageC}>
        <Text style={PrStyle.millage}>12123</Text>
        <FontAwesomeIcon icon={faRoad} size={20}/>
      </View>

      <View style={[PrStyle.tank, { borderColor: borderStyle.borderColor, ...borderStyle }]}>
        <Text style={PrStyle.tankData}>{fuelLevel} L</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

