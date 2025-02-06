import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'HILAMOS',
    backgroundColor: '#ff6347',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6b',
    title: 'TOOTHBRUSH',
    backgroundColor: '#32cd32', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7c',
    title: 'ALMUSAL',
    backgroundColor: '#1e90ff', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'NOOD TV',
    backgroundColor: '#8a2be2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    title: 'LARO MOBILE LEGENDS',
    backgroundColor: 'aqua',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7f',
    title: 'CHARGE CELLPHONE',
    backgroundColor: 'red',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7g',
    title: 'KAIN',
    backgroundColor: 'aquamarine',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7h',
    title: 'LIGO',
    backgroundColor: 'gold',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7i',
    title: 'LINIS BAHAY',
    backgroundColor: 'silver',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7j',
    title: 'MAGLABA',
    backgroundColor: 'pink',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7k',
    title: 'MAGSAMPAY',
    backgroundColor: 'brown',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7l',
    title: 'MAG TAPON BASURA',
    backgroundColor: 'purple',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7m',
    title: 'MASIESTA',
    backgroundColor: 'lightgreen',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7n',
    title: 'MAG MIRYENDA',
    backgroundColor: 'lightblue',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7o',
    title: 'MAG GYM',
    backgroundColor: 'red',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7p',
    title: 'TAMBAY SA LABAS',
    backgroundColor: 'darkred',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7q',
    title: 'LIGO',
    backgroundColor: 'darkgreen',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7r',
    title: 'REST',
    backgroundColor: 'yellow',
  },
{
    id: '58694a0f-3da1-471f-bd96-145571e29d7s',
    title: 'LUTO ULAM',
    backgroundColor: 'green',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7s',
    title: 'DINNER',
    backgroundColor: 'purple',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#00008B' : item.backgroundColor;
    const color = item.id === selectedId ? 'white' : 'black'; 

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;