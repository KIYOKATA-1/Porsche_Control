import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../assets/img/image';
import { RStyle } from '../styles/signup';

export default function Signup() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:5010/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            const contentType = response.headers.get("content-type");
    
            if (!response.ok) {
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    if (response.status === 409) {
                        Alert.alert("User Exists", data.message, [
                            { text: "Stay", onPress: () => console.log('Stay on Sign Up'), style: 'cancel' },
                            { text: "Go to Sign In", onPress: () => navigation.navigate('Signin') }
                        ]);
                    } else {
                        throw new Error(data.message || "Unknown error");
                    }
                } else {
                    throw new Error("Non-JSON response received: " + await response.text());
                }
            } else {
                const data = await response.json(); 
                Alert.alert("Success", data.message, [
                    { text: "OK", onPress: () => navigation.navigate('Signin', { userId: data.userId }) }
                ]);
            }
        } catch (error) {
            Alert.alert("Registration Error", "Could not parse response: " + error.toString());
        }
    };

    return (
        <SafeAreaView style={RStyle.container}>
            <View>
                <Image source={IMAGES.CAR2} style={RStyle.car}></Image>
            </View>
            <View style={RStyle.input}>
                <TextInput placeholder="Username" placeholderTextColor={'snow'} style={RStyle.username} onChangeText={setUsername} />
                <TextInput placeholder="Password" placeholderTextColor={'snow'} secureTextEntry={true} style={RStyle.password} onChangeText={setPassword} />
            </View>
            <View style={RStyle.btnContainer}>
                <TouchableOpacity style={RStyle.rigstBtn} onPress={handleSignUp}>
                    <Text style={RStyle.registBtnText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
