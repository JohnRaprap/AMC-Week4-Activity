import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.boldText}>Raphael</Text>
        <Text style={styles.italicText}> Vargas</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
  },
  title: {
  marginTop: 50,
  paddingVertical: 8,
  borderWidth: 3,
  borderColor: 'black',
  borderRadius: 6,
  backgroundColor: 'cyan',
  color: 'black',
  textAlign: 'center',
  fontSize: 25,
  fontWeight: '',
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});

export default App;
