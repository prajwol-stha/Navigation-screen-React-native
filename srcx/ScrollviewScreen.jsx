import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';

const FlatListExample = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({ id: i, title: `Item ${i}` }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header Content</Text>
      <Text style={styles.subHeaderText}>Sub Header</Text>
    </View>
  );
  

  const ListFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer Content</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    padding: 10,
    backgroundColor: '#222',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  subHeaderText: {
    fontSize: 15,
    color: 'white',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemText: {
    color: 'white',
  },
  footer: {
    padding: 20,
    backgroundColor: '#222',
  },
  footerText: {
    fontSize: 18,
    color: 'white',
  },
});

export default FlatListExample;