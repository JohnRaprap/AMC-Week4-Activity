import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'PRAY',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'TOOTHBRUSH',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'UMAGAHAN',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'LIGO',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'LABAS',
  },
];


const DATA2 = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'KAIN',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'LIGO',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TULOG',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'MIRYENDA',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'NOOD TV',
  },
];

const DATA3 = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'DINNER',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'LIGO',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TAMBAY SA TAPAT',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'MLBB',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TULOG',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>MORNING</Text>
      <FlatList
        data={DATA1}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>AFTERNOON</Text>
      <FlatList
        data={DATA2}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>EVENING</Text>
      <FlatList
        data={DATA3}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  sectionTitle: {
    fontSize: 32,
    marginVertical: 10,
    marginLeft: 16,
  },
});

export default App;
