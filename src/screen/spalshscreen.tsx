import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }:any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('HomeScreen'); 
        }, 3000); 

    return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assest/closeup2.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Welcome to My Dating appss</Text>
            <Text style={styles.subtitle}>Find your perfect matchdd!</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FF4081', 
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
},
title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
},
subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
},
});
