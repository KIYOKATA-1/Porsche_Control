import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, Switch, StatusBar } from 'react-native';
import React, { useState, useEffect, useMemo} from 'react';
import { PrStyle } from '../styles/profile';
import { useRoute } from '@react-navigation/native';
import PROFILE from '../assets/img/PROFILE';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeProvider';
const { width } = Dimensions.get('window');
import RadioGroup from 'react-native-radio-buttons-group';


export default function Profile() {
    const route = useRoute();
    const username = route.params?.username;  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fuelLevel, setFuelLevel] = useState(25);

    const { isLightTheme, toggleTheme } = useTheme();

    useEffect(() => {
      StatusBar.setBarStyle(isLightTheme ? 'dark-content' : 'light-content', true);
      StatusBar.setBackgroundColor(isLightTheme ? '#FFF' : '#000', true);
  }, [isLightTheme]);

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

    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

  
    const borderStyle = getBorderStyle(fuelLevel);
    const containerStyle = isLightTheme ? PrStyle.containerLight : PrStyle.container;
    const textStyle = isLightTheme ? PrStyle.textLight : PrStyle.text;
    const usernameStyle = isLightTheme ? PrStyle.usernameLight : PrStyle.username;
    const welcomeStyle = isLightTheme ? PrStyle.welcomeLight : PrStyle.welcome;
    const carStyle = isLightTheme ? PrStyle.carLight : PrStyle.car;
    const tankDataStyle = isLightTheme ? PrStyle.tankDataLight : PrStyle.tankData;    
    const switchTextStyle = isLightTheme ? PrStyle.switchTextLight : PrStyle.switchTextDark;

    return (
        <SafeAreaView style={containerStyle}>
            <View style={PrStyle.textC}> 
                <Text style={welcomeStyle}>
                    WELCOME
                </Text>
                <Text style={usernameStyle}>
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
                            style={[carStyle, { width: width, resizeMode: 'cover' }]}
                        />
                    ))}
                </ScrollView>
            </View>

            <View style={PrStyle.dataCon}>
                <View style={PrStyle.millageC}>
                    <Text style={PrStyle.millage}>12123</Text>
                    <FontAwesomeIcon icon={faRoad} size={20} />
                </View>

                <View style={[PrStyle.tank, { borderColor: borderStyle.borderColor, ...borderStyle }]}>
                    <Text style={tankDataStyle}>{fuelLevel} L</Text>
                </View>
            </View>
            <View style={PrStyle.switchC}>
              <Switch
                    value={isLightTheme}
                    onValueChange={toggleTheme}
                    ios_backgroundColor="transparent"
               />
               <Text style={switchTextStyle}>DARK | LIGHT</Text>
            </View>
            <View>
            <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
            </View>
        </SafeAreaView>
    );
}
