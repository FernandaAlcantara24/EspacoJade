import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import Dot from '../../component/Clothes/Dot';
import SizeButton from '../../component/Clothes/SizeButton';
import Button from '../../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { FavoriteContext } from '../Favorite/favoritecontext';

export default function Detail(props) {
  let products = props.route.params;
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState('');
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { addToFavorites } = useContext(FavoriteContext);

  const colorNames = {
    '#6C0345': 'Vinho',
    '#DC6B19': 'Bronze',
    '#FCDC2A': 'Amarelo',
    '#C08261': 'Nude',
    '#436850': 'Verde Musgo',
    '#A9B388': 'Verde Claro',
    '#9BCF53': 'Verde Limão',
    '#074173': 'Azul Escuro',
    '#7AA2E3': 'Azul',
    '#D20062': 'Rosa',
    '#000000': 'Preto',
    '#D04848': 'Vermelho',
    '#E0F4FF': 'Azul Bebê'
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  const adicionarAosFavoritos = () => {
    addToFavorites(products, corSelecionada, tamanhoSelecionado);
    Alert.alert('Carrinho', 'Produto adicionado ao carrinho com sucesso!');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: 'rgba(250,200,200,0.2)', borderRadius: 5, marginLeft: '2%' }}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="left" size={30} color="#eb248b" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginLeft: '3%' }}>{products.productName}</Text>
        </SafeAreaView>
      </View>
      <View style={styles.viewImage}>
        <Image
          source={products.image}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View>
        <View style={{alignItems:'flex-start'}}>
          <Text style={[styles.title, { fontSize: 20 }, { marginTop: 15 }, { color: '#eb248b' }]}>R${products.productPrice}</Text>
          <TouchableOpacity style={styles.cartButton} onPress={adicionarAosFavoritos}>
          <FontAwesome name="shopping-cart" size={30} color="#eb248b" />
          </TouchableOpacity>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 17 }]}>{products.productName}</Text>
        </View>
        <Text style={{ fontSize: 17, paddingHorizontal: '2%', marginTop: '3%' }}>Cores:</Text>
        <View style={styles.dotContainer}>
          {products.colors.map((color, index) => (
            <Dot key={index} color={color} onPress={() => setCorSelecionada(colorNames[color])} />
          ))}
        </View>
          
        <Text style={{ fontSize: 17, paddingHorizontal: '2%' }}>Tamanhos:</Text>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => {
                handleSizePress(0);
                setTamanhoSelecionado(38);
              }}
              isSelected={selectedSize === 0}
            >
              38
            </SizeButton>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => {
                handleSizePress(1);
                setTamanhoSelecionado(40);
              }}
              isSelected={selectedSize === 1}
            >
              40
            </SizeButton>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => {
                handleSizePress(2);
                setTamanhoSelecionado(42);
              }}
              isSelected={selectedSize === 2}
            >
              42
            </SizeButton>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => {
                handleSizePress(3);
                setTamanhoSelecionado(44);
              }}
              isSelected={selectedSize === 3}
            >
              44
            </SizeButton>
          </ScrollView>
        </View>
        <View style={styles.texTitle}>
          <Text style={[styles.textContent, { fontSize: 20 }]}>{products.productName}</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontSize: 17, paddingHorizontal: '4%', marginTop: '3%', color: 'gray' }}>Ver Descrição...</Text>
        </TouchableOpacity>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Animated.View
              style={styles.modalContent}
              entering={ZoomIn}
              exiting={ZoomOut}
            >
              <TouchableOpacity style={styles.favButton} onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 18, color: '#eb248b', marginTop: 20, marginLeft: 15 }}>Fechar</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>{products.description}</Text>
              <Text style={styles.modalText}>Categoria: {products.category}</Text>
              <Text style={styles.modalText}>Material: {products.material}</Text>
            </Animated.View>
          </View>
        </Modal>
        <Button products={products} tamanhoSelecionado={tamanhoSelecionado} corSelecionada={corSelecionada} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 400,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
    marginTop: 10
  },
  textContent: {
    fontSize: 15,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  texTitle: {
    fontSize: 22,
    marginVertical: '3%',
    marginHorizontal: '2%'
  },
  textList: {
    fontSize: 15,
    lineHeight: 25,
  },
  viewImage: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems:'center',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '40%',
    borderRadius: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20
  },
  cartButton:{
    
    backgroundColor: 'rgba(250,200,200,0.2)',
    padding: '2%',
   
    borderRadius: '12%',
    left: 350
  },
});
