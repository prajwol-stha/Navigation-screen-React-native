import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SecondScreen = ({ route }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {userName}</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color:'black'
  },
});
