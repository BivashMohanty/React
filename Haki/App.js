import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GetStarted from './Screens/GetStarted';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Home from './Screens/Home';

function App() {
  const [currentScreen, setCurrentScreen] = useState('GetStarted');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  let ScreenComponent;
  switch (currentScreen) {
    case 'SignUp':
      ScreenComponent = SignUp;
      break;
    case 'Login':
      ScreenComponent = Login;
      break;
    case 'Home':
      ScreenComponent = Home;
      break;
    default:
      ScreenComponent = GetStarted;
  }

  return (
    <View style={styles.container}>
      <ScreenComponent navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
