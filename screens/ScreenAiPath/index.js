import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Screen</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sed sapien. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sed sapien.</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
export default Screen;