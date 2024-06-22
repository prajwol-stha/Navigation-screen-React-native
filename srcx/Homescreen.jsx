import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';

const Homescreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <TextInput
        style={[styles.input, { 
          color: isDarkMode ? '#fff' : '#000',
          borderColor: isDarkMode ? '#fff' : 'gray',
        }]}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? '#999' : '#666'}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: isDarkMode ? '#4a4a4a' : '#252525' }]}
        onPress={() => navigation.navigate('SecondScreen', { userName: name })}
      >
        <Text style={styles.buttonText}>Navigate to second screen</Text>
      </TouchableOpacity>
      <ThemeToggle />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});