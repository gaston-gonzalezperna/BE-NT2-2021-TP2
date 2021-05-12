import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Click para hacer vibrar el dispositivo!</Text>
      <Button 
        title="Vibracion"
        onPress={vibrate}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
