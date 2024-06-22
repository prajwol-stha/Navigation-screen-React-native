import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');

const DATA = [
  { id: '1', type: 'image', imageUrl: '/api/placeholder/400/400', likes: 256, username: 'user1' },
  { id: '2', type: 'text', content: 'Just a thought for the day...', likes: 42, username: 'user2' },
  { id: '3', type: 'image', imageUrl: '/api/placeholder/400/400', likes: 128, username: 'user3' },
  { id: '4', type: 'carousel', images: ['/api/placeholder/400/400', '/api/placeholder/400/400', '/api/placeholder/400/400'], likes: 512, username: 'user4' },
  { id: '5', type: 'text', content: 'Another interesting post!', likes: 76, username: 'user5' },
];

const Instagram = () => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'image':
        return <ImagePost item={item} />;
      case 'text':
        return <TextPost item={item} />;
      case 'carousel':
        return <CarouselPost item={item} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const ImagePost = ({ item }) => (
  <View style={styles.post}>
    <Text style={styles.username}>{item.username}</Text>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <Text style={styles.likes}>{item.likes} likes</Text>
  </View>
);

const TextPost = ({ item }) => (
  <View style={styles.post}>
    <Text style={styles.username}>{item.username}</Text>
    <Text style={styles.textContent}>{item.content}</Text>
    <Text style={styles.likes}>{item.likes} likes</Text>
  </View>
);

const CarouselPost = ({ item }) => (
  <View style={styles.post}>
    <Text style={styles.username}>{item.username}</Text>
    <FlatList
      data={item.images}
      renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
    <Text style={styles.likes}>{item.likes} likes</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    marginBottom: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  image: {
    width: width,
    height: width,
  },
  textContent: {
    margin: 10,
    fontSize: 16,
  },
  likes: {
    margin: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default Instagram;