import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Button, SafeAreaView } from 'react-native';

const FlatlistScreen = () => {
  const [useScrollView, setUseScrollView] = useState(false);
  const [itemCount, setItemCount] = useState(20);

  const data = Array.from({ length: itemCount }, (_, i) => ({ id: i, title: `Item ${i}` }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const ScrollViewContent = () => (
    <ScrollView style={styles.scrollView}>
      {data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {useScrollView ? 'ScrollView Example' : 'FlatList Example'}
        </Text>
        <Button
          title={useScrollView ? 'Switch to FlatList' : 'Switch to ScrollView'}
          onPress={() => setUseScrollView(!useScrollView)}
        />
        <Button
          title="Add 100 Items"
          onPress={() => setItemCount(itemCount + 100)}
        />
      </View>
      
      {useScrollView ? (
        <ScrollViewContent />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 16,
  },
});

export default FlatlistScreen;