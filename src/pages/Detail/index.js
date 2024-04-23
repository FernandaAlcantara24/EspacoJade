import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Dot from '../../component/Clothes/Dot';
import SizeButton from '../../component/Clothes/SizeButton';
import Button from '../../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function Detail(props) { //props está passando informações de um componente pai para um componente filho.
  let products = props.route.params; //contém os parâmetros passados para esta tela de navegação. 
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizePress = (size) => {
    setSelectedSize(size); // Atualizar o tamanho selecionado ao pressionar um botão
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Cabeçalho */}
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

      {/* Imagem roupa */}
      <View style={styles.viewImage}> 
        <Image
          source={products.image}
          style={styles.image}
          resizeMode='cover'
        />
      </View>

      {/* View preço, nome, cor e tamanho do produto */}
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 20 }, {marginTop: 15}, {color: '#eb248b'}]}>R${products.productPrice}</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 17 }]}>{products.productName}</Text>
        </View>

        <Text style={{fontSize: 17,  paddingHorizontal: '2%', marginTop: '3%' }}>Cores:</Text>
        <View style={styles.dotContainer}>
          {/* Chama as cores do produto */}
        {products.colors.map((color, index) => ( 
          <Dot key={index} color={color} />
        ))}
        </View>

        {/* Botões de tamanhos do produto */}
        <Text style={{fontSize: 17,  paddingHorizontal: '2%'}}>Tamanhos:</Text>
        <View style={{ flexDirection: 'row', width: '100%' }} >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => handleSizePress(0)}
              isSelected={selectedSize === 0}
            >
              38
            </SizeButton >
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => handleSizePress(1)}
              isSelected={selectedSize === 1}
            >
              40
            </SizeButton>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => handleSizePress(2)}
              isSelected={selectedSize === 2}
            >
              42
            </SizeButton>
            <SizeButton
              bgColor="#eb248b"
              color='black'
              onPress={() => handleSizePress(3)}
              isSelected={selectedSize === 3}
            >
              44
            </SizeButton>
          </ScrollView>
        </View>

        {/* Descrição do produto */}
        <View style={styles.texTitle}>
          <Text style={[styles.textContent, {fontSize: 20}]}>{products.productName}</Text>

          <Text style={styles.textContent}>{products.description}</Text>

          <Text style={styles.textList}>- Categoria: {products.category}</Text>

          <Text style={styles.textList}>- Material: {products.material}</Text>
        </View>

        {/* Botão para comprar */}
        <Button/>

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
  viewImage:{
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
        },
        android: {
          elevation: 3,
        },
      }),
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  },

});
