import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function Dot({ color, onPress, selectedColor }) {
  const [isSelected, setIsSelected] = useState(color === selectedColor);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress(isSelected ? null : color); // Desseleciona se já estiver selecionada, senão seleciona
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: color },
        isSelected && styles.selectedContainer // Aplica estilo adicional se estiver selecionado
      ]}
      onPress={handlePress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: Dimensions.get('window').width * 0.05 / 2,
    marginHorizontal: '2.5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    transform: [{ scale: 1 }] // Define o tamanho normal da bolinha
  },
  selectedContainer: {
    transform: [{ scale: 1.5 }] // Aumenta o tamanho da bolinha quando selecionada
  }
});
