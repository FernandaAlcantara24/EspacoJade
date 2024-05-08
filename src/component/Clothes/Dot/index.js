import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';

export default function Dot(props) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: props.color }]}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: Dimensions.get('window').width * 0.05 / 2,
    marginHorizontal: '2.5%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
