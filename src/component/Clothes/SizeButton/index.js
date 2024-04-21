import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SizeButton(props) {
  const handlePress = () => {
    props.onPress(props.index); // Chama a função onPress do pai com o índice do botão
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: props.isSelected ? props.bgColor || '#fff' : 'white' },
      ]}
      onPress={handlePress}>
      <Text style={[styles.text, { color: props.color || '#c9c' }]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eb248b',
    borderWidth: 3,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
