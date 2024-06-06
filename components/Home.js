import React, { useState , useRef, useEffect} from 'react';
import { Text, View, SafeAreaView, Switch, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStyle } from '../styles/home';
import CARS from '../assets/img/CARS';
import { useTheme } from './ThemeProvider';
export default function Home() {
    const navigation = useNavigation();
    const [engineState, setEngineState] = useState(false);
    const [doorState, setDoorState] = useState(false);
    const [trunkState, setTrunkState] = useState(false);
    const [climateState, setClimateState] = useState(false);
    const [imageIndex, setImageIndex] = useState(0); 
    const [fadeAnim] = useState(new Animated.Value(0));
    const scaleAnim = useRef(new Animated.Value(1.5)).current;

    const {isLightTheme, toggleTheme} = useTheme();
    const imageKeys = Object.keys(CARS);

    const toggleEngine = () => {
        setEngineState(!engineState);
    };

    const toggleDoor = () => {
        setDoorState(!doorState);
    };

    const toggleTrunk = () => {
        setTrunkState(!trunkState);
    };

    const toggleClimate = () => {
        setClimateState(!climateState);
    };

    const switchStyle = (isActive) => ({
        borderWidth: 2,
        borderColor: isLightTheme ? (isActive ? '#CDBDFA' : '#63519F') : (isActive ? '#63519F' : '#CDBDFA'),
        shadowColor: isLightTheme ? (isActive ? '#CDBDFA' : '#63519F') : (isActive ? '#63519F' : '#CDBDFA'),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 3,
        shadowRadius: 10,
        tintColor:isLightTheme ? (isActive ? '#CDBDFA' : '#63519F') : (isActive ? '#63519F' : '#CDBDFA'),
    });

    const handleSetImageIndex = (index) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true
        }).start(() => {
            setImageIndex(index);
            scaleAnim.setValue(0.3); 
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.spring(scaleAnim, {
                    toValue: 0.8,
                    friction: 8,  
                    useNativeDriver: true
                })
            ]).start();
        });
    };

    const textColor = (isActive) => ({
        color: isLightTheme ? (isActive ? '#FBFAFE' : '#63519F') : (isActive ? '#1C1A26' : '#CDBDFA')
    });

    const containerStyle = isLightTheme ? HStyle.containerLight : HStyle.container;
    const firstTextStyle = isLightTheme ? HStyle.firstTextLight : HStyle.firstText;
    const secondTextStyle = isLightTheme ? HStyle.secondTextLight : HStyle.secondText;
    const thirdTextStyle = isLightTheme ? HStyle.thirdTextLight : HStyle.thirdText;
    const menuBlockStyle = isLightTheme ? HStyle.menuBlockLight : HStyle.menuBlock;
    const menuBlockActiveStyle = isLightTheme ? HStyle.menuBlockActiveLight : HStyle.menuBlockActive;

    return (
        <SafeAreaView style={containerStyle}>
            <View style={HStyle.textContainer}>
                <Text style={firstTextStyle}>PORSCHE <Text style={secondTextStyle}>911</Text></Text>
                <Text style={thirdTextStyle}>GT3 RS</Text>
            </View>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
                    <Animated.Image source={CARS[imageKeys[imageIndex]]} style={HStyle.car} />
            </Animated.View>
            <View style={HStyle.menu}>
                <View style={[menuBlockStyle, engineState ? menuBlockActiveStyle : HStyle.menuBlockInactive]}>
                    <View style={HStyle.menuTxt}>
                        <Text style={[HStyle.optionN, textColor(engineState)]}>ENGINE</Text>
                        <Text> </Text>
                        <Text style={[HStyle.state, textColor(engineState)]}>{engineState ? 'STARTED' : 'STOPPED'}</Text>
                    </View>
                    <View style={HStyle.switchBlock}> 
                        <Switch
                            value={engineState}
                            onValueChange={toggleEngine}
                            trackColor={{ false: 'transparent', true: 'transparent' }} 
                            ios_backgroundColor="transparent"
                            style={switchStyle(engineState)}
                        />
                    </View>
                </View>

                <View style={[menuBlockStyle, doorState ? menuBlockActiveStyle : HStyle.menuBlockInactive]}>
                    <View style={HStyle.menuTxt}>
                        <Text style={[HStyle.optionN, textColor(doorState)]}>DOOR</Text>
                        <Text> </Text>
                        <Text style={[HStyle.state, textColor(doorState)]}>{doorState ? 'OPENED' : 'CLOSED'}</Text>
                    </View>
                    <View style={HStyle.switchBlock}>
                        <Switch
                            value={doorState}
                            onValueChange={toggleDoor}
                            trackColor={{ false: 'transparent', true: 'transparent' }}
                            ios_backgroundColor="transparent"
                            style={switchStyle(doorState)}
                        />
                    </View>
                </View>

                <View style={[menuBlockStyle, trunkState ? menuBlockActiveStyle : HStyle.menuBlockInactive]}>
                    <View style={HStyle.menuTxt}>
                        <Text style={[HStyle.optionN, textColor(trunkState)]}>TRUNK</Text>
                        <Text> </Text>
                        <Text style={[HStyle.state, textColor(trunkState)]}>{trunkState ? 'OPENED' : 'CLOSED'}</Text>
                    </View>
                    <View style={HStyle.switchBlock}> 
                        <Switch
                            value={trunkState}
                            onValueChange={toggleTrunk}
                            trackColor={{ false: 'transparent', true: 'transparent' }}
                            ios_backgroundColor="transparent"
                            style={switchStyle(trunkState)}
                        />
                    </View>
                </View>

                <View style={[menuBlockStyle, climateState ? menuBlockActiveStyle : HStyle.menuBlockInactive]}>
                    <View style={HStyle.menuTxt}>
                        <Text style={[HStyle.optionN, textColor(climateState)]}>CLIMATE</Text>
                        <Text> </Text>
                        <Text style={[HStyle.state, textColor(climateState)]}>{climateState ? 'ON' : 'OFF'}</Text>
                    </View>
                    <View style={HStyle.switchBlock}> 
                        <Switch
                            value={climateState}
                            onValueChange={toggleClimate}
                            trackColor={{ false: 'transparent', true: 'transparent' }}
                            ios_backgroundColor="transparent"
                            style={switchStyle(climateState)}
                        />
                    </View>
                </View>
                
            </View>
            <Text style={HStyle.btnGroupTxt}>CHOOSE COLOR</Text>
            <View style={HStyle.btnGroup}>
                {imageKeys.map((key, index) => (
                    <TouchableOpacity
                        key={key}
                        onPress={() => handleSetImageIndex(index)}
                        style={[HStyle.carColor, {
                            backgroundColor: key.includes('White') ? '#F7F7F7' : 
                            key.includes('Blue') ? '#25ADE4' : 
                            key.includes('Red') ? '#B02428' : 'black',
                        }]}>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}
