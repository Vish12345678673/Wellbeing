import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const LpIndia = ({ navigation }) => {
  const handleOptionClick = (option) => {
    switch (option) {
      case 'LawsSelect':
        navigation.navigate('IndiaLS');
        break;
      case 'IndiaRebate':
        navigation.navigate('IndiaRebate');
        break;
      default:
        break;
    }}

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./04.jpg')} style={styles.background} blurRadius={5}>
        <Text style={styles.title}>India</Text>
        <TouchableOpacity style={styles.buttonClass}  onPress={() => handleOptionClick('LawsSelect')}>
          <Text style={styles.buttonText}>Tax Laws</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonClass}   onPress={() => handleOptionClick('IndiaRebate')}>
          <Text style={styles.buttonText}>Tax Rebate</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 72,
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    zIndex: 1,
    marginBottom: 50,
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClass: {
    width: 140,
    height: 50,
    borderWidth: 1,
    borderColor: '#00ff15',
    borderRadius: 18,
    backgroundColor: 'linear-gradient(rgba(141, 21, 182, 1), rgba(229, 68, 233, 1))',
    boxShadow: '3px 4px 0px 0px #8a2a21',
    shadowColor: '#810e05',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LpIndia;
