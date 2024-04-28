import React, { useState , useRef, useEffect} from 'react';
import { Text, View, SafeAreaView, Switch, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStyle } from '../styles/home';
import CARS from '../assets/img/CARS';

export default function Home() {
    const navigation = useNavigation();
    const [engineState, setEngineState] = useState(false);
    const [doorState, setDoorState] = useState(false);
    const [trunkState, setTrunkState] = useState(false);
    const [climateState, setClimateState] = useState(false);
    const [imageIndex, setImageIndex] = useState(0); 
    const [fadeAnim] = useState(new Animated.Value(0));
    const scaleAnim = useRef(new Animated.Value(1.5)).current;

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
        borderColor: isActive ? 'black' : 'white',
        shadowColor: isActive ? 'black' : 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 3,
        shadowRadius: 10,
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
        color: isActive ? 'black' : 'white'
    });

    return (
        <SafeAreaView style={HStyle.container}>
            <View style={HStyle.textContainer}>
                <Text style={HStyle.firstText}>PORSCHE <Text style={HStyle.secondText}>911</Text></Text>
                <Text style={HStyle.thirdText}>GT3 RS</Text>
            </View>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
                    <Animated.Image source={CARS[imageKeys[imageIndex]]} style={HStyle.car} />
            </Animated.View>
            <View style={HStyle.menu}>
                <View style={[HStyle.menuBlock, engineState ? HStyle.menuBlockActive : HStyle.menuBlockInactive]}>
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
                            thumbColor={engineState ? 'black' : 'white'}
                            ios_backgroundColor="transparent"
                            style={switchStyle(engineState)}
                        />
                    </View>
                </View>

                <View style={[HStyle.menuBlock, doorState ? HStyle.menuBlockActive : HStyle.menuBlockInactive]}>
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
                            thumbColor={doorState ? 'black' : 'white'}
                            ios_backgroundColor="transparent"
                            style={switchStyle(doorState)}
                        />
                    </View>
                </View>

                <View style={[HStyle.menuBlock, trunkState ? HStyle.menuBlockActive : HStyle.menuBlockInactive]}>
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
                            thumbColor={trunkState ? 'black' : 'white'}
                            ios_backgroundColor="transparent"
                            style={switchStyle(trunkState)}
                        />
                    </View>
                </View>

                <View style={[HStyle.menuBlock, climateState ? HStyle.menuBlockActive : HStyle.menuBlockInactive]}>
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
                            thumbColor={climateState ? 'black' : 'white'}
                            ios_backgroundColor="transparent"
                            style={switchStyle(climateState)}
                        />
                    </View>
                </View>
                
            </View>
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
