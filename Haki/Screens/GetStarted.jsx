import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Buttons from '../Components/Buttons'; 

const GetStarted = ({ navigate }) => {
  const handleSignUp = () => {
    navigate('SignUp');
  };

  const handleLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/665/68/940/anime-room-interior-dark-wallpaper-preview.jpg' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Get started by creating an account or logging in.</Text>
          <Buttons onPress={handleSignUp}>Sign Up</Buttons>
          <Buttons onPress={handleLogin}>Log In</Buttons>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default GetStarted;
