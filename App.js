import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', 
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
  },
  box1: {
    width: 100, 
    height: 100, 
    backgroundColor: 'red', 
  },
  box2: {
    width: 100, 
    height: 100, 
    backgroundColor: 'blue', 
  },
});

export default App;
