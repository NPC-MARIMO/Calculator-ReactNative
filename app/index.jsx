import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (button) => {
    if (button === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (button === 'C') {
      setInput('');
    } else {
      setInput(input + button);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || '0'}</Text>
      <View style={styles.buttons}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '=', '/', '*','+', 'C'].map((button) => (
          <TouchableOpacity
            key={button}
            style={[styles.button, button === 'C' ? styles.clearButton : button === '=' ? styles.equalButton : null]}
            onPress={() => handlePress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
  },
  display: {
    fontSize: 60,
    color: '#FFFFFF',
    marginBottom: 30,
    minWidth: '80%',
    textAlign: 'right',
    paddingRight: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  clearButton: {
    backgroundColor: '#FF5C5C',
  },
  equalButton: {
    backgroundColor: '#3B8C4E',
  },
});

export default App;
